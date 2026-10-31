#!/usr/bin/env python3
"""Rebuild app/renderer/js/dict.js from tools/dict_terms.txt. Usage: python3 tools/build_dict.py"""
import json, os
ids = ['hi','bn','mr','ta','te','gu','kn','ml','pa','ur','fr','es','de','ar']
here = os.path.dirname(os.path.abspath(__file__)); terms = []
for ln in open(os.path.join(here, 'dict_terms.txt'), encoding='utf8'):
    if not ln.strip() or ln.startswith('#'): continue
    p = [x.strip() for x in ln.rstrip('\n').split(' | ')]
    assert len(p) == 17, 'bad row: ' + p[0]
    terms.append({"en": p[0], "s": p[1], "d": p[2], "tr": dict(zip(ids, p[3:]))})
out = os.path.join(here, '..', 'app', 'renderer', 'js', 'dict.js')
open(out, 'w', encoding='utf8').write("/* Multilingual study dictionary. Source: tools/dict_terms.txt (rebuild: python3 tools/build_dict.py). Translations are machine-assisted; verify important words. */\nwindow.FSDict = " + json.dumps({"terms": terms}, ensure_ascii=False) + ";\n")
print(len(terms), 'terms')
