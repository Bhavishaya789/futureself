// Simulates the Android app talking to the PC side
const os=require('os'),path=require('path'),fs=require('fs'),http=require('http');
const pl=require('/home/claude/fsw/app/core/phonelink');
const dir=fs.mkdtempSync(path.join(os.tmpdir(),'pl-'));
const L=pl.create({dir,log:()=>{}});
const req=(method,p,body,tok,port)=>new Promise((res,rej)=>{const r=http.request({host:'127.0.0.1',port,path:p,method,headers:Object.assign({'Content-Type':'application/json'},tok?{Authorization:'Bearer '+tok}:{})},x=>{let b='';x.on('data',c=>b+=c);x.on('end',()=>res({s:x.statusCode,j:JSON.parse(b||'{}')}))});r.on('error',rej);if(body)r.write(JSON.stringify(body));r.end()});
let fail=0;const ok=(n,c)=>{console.log(c?'PASS':'FAIL',n);if(!c)fail++};
(async()=>{
 const port=await L.start(47890);
 ok('ping works without pairing',(await req('GET','/fs/ping',null,null,port)).j.app==='FutureSelf');
 ok('state needs token',(await req('GET','/fs/state',null,null,port)).s===401);
 ok('pair refused while closed',(await req('POST','/fs/pair',{code:'123456'},null,port)).s===403);
 const c=L.newCode();
 const w=(await req('POST','/fs/pair',{code:c.code==='000000'?'111111':'000000',name:'x'},null,port)); ok('wrong code refused',w.s===403);
 const p=await req('POST','/fs/pair',{code:c.code,name:'Bhavishya phone'},null,port); ok('right code gives token',p.s===200&&/^[a-f0-9]{48}$/.test(p.j.token));
 ok('code is single use',(await req('POST','/fs/pair',{code:c.code,name:'y'},null,port)).s===403);
 let st=(await req('GET','/fs/state',null,p.j.token,port)); ok('idle state',st.s===200&&st.j.active===false&&st.j.restrict===false);
 L.setSession({active:true,subject:'Operating Systems',topicId:'operating-systems',lock:'focus',endsAt:Date.now()+1500000,startedAt:Date.now()});
 st=(await req('GET','/fs/state',null,p.j.token,port)); ok('session running -> restrict',st.j.active&&st.j.restrict&&st.j.subject==='Operating Systems'&&st.j.endsAt>Date.now());
 L.setSession({active:true,subject:'x',lock:'focus',endsAt:Date.now()+1000,paused:true}); st=await req('GET','/fs/state',null,p.j.token,port); ok('paused -> no restrict',st.j.restrict===false&&st.j.paused===true);
 L.setSession({active:true,subject:'x',lock:'gentle',endsAt:Date.now()+1000}); st=await req('GET','/fs/state',null,p.j.token,port); ok('gentle -> no restrict',st.j.restrict===false);
 L.setSession({active:false}); st=await req('GET','/fs/state',null,p.j.token,port); ok('ended -> inactive',st.j.active===false);
 ok('bad token refused',(await req('GET','/fs/state',null,'a'.repeat(48),port)).s===401);
 // brute force: 5 wrong codes close pairing
 const c2=L.newCode(); for(let i=0;i<5;i++) await req('POST','/fs/pair',{code:'999999'===c2.code?'888888':'999999'},null,port);
 ok('5 wrong codes close pairing',(await req('POST','/fs/pair',{code:c2.code,name:'z'},null,port)).s===403&&L.info().code===null);
 ok('device listed, token not leaked',L.info().devices.length===1&&!JSON.stringify(L.info()).includes(p.j.token));
 const id=L.info().devices[0].id; L.unpair(id); ok('unpair revokes token',(await req('GET','/fs/state',null,p.j.token,port)).s===401);
 ok('unknown path 404',(await req('GET','/nope',null,null,port)).s===404);
 L.stop(); const L2=pl.create({dir,log:()=>{}}); ok('pcId persists',L2.info().pcId===L.info().pcId);
 console.log(fail?'FAILED '+fail:'ALL PASS');process.exit(fail?1:0);
})();
