import sys
from lib import *
for m in sys.argv[1:]: __import__(m)
build('/home/claude/fsw/app/renderer/data/ct')
