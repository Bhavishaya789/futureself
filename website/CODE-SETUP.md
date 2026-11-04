# Coding platform: two things to switch on (both free)

The coding platform works without these (Python and JavaScript run inside the app, and the Windows app runs anything installed on the PC).
You need them only for: running C, C++, Java, Go, Rust... on a PHONE or a PC without that compiler, AND for marking coding challenges with hidden tests.

## 1. A code runner (pick ONE)
**Piston** (free, open source). On any small server (a free Oracle Cloud VM, or a Rs 400/month VPS) with Docker:
    docker run --privileged -d -p 2000:2000 --name piston ghcr.io/engineer-man/piston
    # then install languages:  curl localhost:2000/api/v2/packages  (see github.com/engineer-man/piston)
In Vercel -> Project -> Settings -> Environment Variables add:  PISTON_URL = http://YOUR-SERVER:2000   (put it behind https if you can)

**Judge0** (alternative): JUDGE0_URL = https://your-judge0-host  (for RapidAPI also JUDGE0_KEY and JUDGE0_HOST)

## 2. An AI key (free tier is enough)
GEMINI_API_KEY from https://aistudio.google.com/apikey   (or ANTHROPIC_API_KEY)
It marks the written question, reviews code quality, and writes study notes.

After adding variables, redeploy once (Vercel -> Deployments -> Redeploy).
