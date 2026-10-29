import sys, os, re, glob
# usage: append.py batchfile
# Sections start with "=====<glob relative to Content, e.g. Semester-3/Operating-Systems/*/05-Page*>".
# The text under a header (@visual / @problems / @video blocks) replaces any existing blocks of the same name in the matched file.
root='/home/claude/fsw/Content'
def split_sections(text):
    out={}; cur=None
    for line in text.split('\n'):
        m=re.match(r'^@(study|qa|quiz|visual|problems|video)\s*$',line)
        if m: cur=m.group(1); out[cur]=[]; continue
        if cur: out[cur].append(line)
    return out
cur=None; buf=[]; n=0
def flush():
    global n
    if not cur: return
    files=glob.glob(os.path.join(root,cur))
    if len(files)!=1: print('ERROR pattern matched %d files: %s'%(len(files),cur)); return
    f=files[0]; txt=open(f).read()
    new=split_sections('\n'.join(buf))
    # remove old blocks being replaced
    for name in new:
        txt=re.sub(r'\n@%s[ \t]*\n.*?(?=\n@(?:study|qa|quiz|visual|problems|video)[ \t]*\n|\Z)'%name,'',txt,flags=re.S)
    txt=txt.rstrip('\n')+'\n'
    for name in ('visual','problems','video'):
        if name in new:
            body='\n'.join(new[name]).strip('\n')
            txt+='\n@%s\n%s\n'%(name,body)
    open(f,'w').write(txt); n+=1
for line in open(sys.argv[1]).read().split('\n'):
    if line.startswith('====='):
        flush(); cur=line[5:].strip(); buf=[]
    else: buf.append(line)
flush(); print('updated',n,'files')
