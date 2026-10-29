import re,glob,subprocess,sys
bad=0;n=0
for f in glob.glob('Content/**/*.md',recursive=True):
    s=open(f).read()
    for m in re.finditer(r"```python\n(.*?)```\s*\nOutput:\s*\n```\n(.*?)```",s,re.S):
        n+=1
        r=subprocess.run([sys.executable,'-c',m.group(1)],capture_output=True,text=True,timeout=30)
        if r.stdout.strip()!=m.group(2).strip():
            bad+=1;print('MISMATCH',f);print(' got:',r.stdout.strip()[:200]);print(' doc:',m.group(2).strip()[:200])
import os,tempfile
for f in glob.glob('Content/**/*.md',recursive=True):
    s=open(f).read()
    for m in re.finditer(r"```java\n(.*?)```\s*\nOutput:\s*\n```\n(.*?)```",s,re.S):
        n+=1
        d=tempfile.mkdtemp(); cn=re.search(r'public\s+class\s+(\w+)',m.group(1)).group(1)
        open(d+'/'+cn+'.java','w').write(m.group(1))
        c=subprocess.run(['javac',d+'/'+cn+'.java'],capture_output=True,text=True)
        r=subprocess.run(['java','-cp',d,cn],capture_output=True,text=True,timeout=30)
        got='\n'.join(l for l in r.stdout.strip().splitlines())
        if got!=m.group(2).strip() or c.returncode:
            bad+=1;print('MISMATCH',f,c.stderr[:200]);print(' got:',got[:300]);print(' doc:',m.group(2).strip()[:300])
print('checked',n,'mismatches',bad)
