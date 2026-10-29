import sys, os
# usage: split.py batchfile  (sections start with a line "=====relative/path.md")
root='/home/claude/fsw/Content'
cur=None; buf=[]; n=0
def flush():
    global n
    if cur:
        p=os.path.join(root,cur); os.makedirs(os.path.dirname(p),exist_ok=True)
        open(p,'w').write('\n'.join(buf).strip()+'\n'); n+=1
for line in open(sys.argv[1]).read().split('\n'):
    if line.startswith('====='):
        flush(); cur=line[5:].strip(); buf=[]
    else: buf.append(line)
flush(); print('wrote',n,'files')
