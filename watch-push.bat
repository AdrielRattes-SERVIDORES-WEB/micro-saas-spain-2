@echo off
cd /d C:\Users\noteb\micro-saas-spain
echo Watching for changes... (Ctrl+C to stop)
chokidar "apps/*/src/**/*.ts" "apps/*/public/**" --debounce 5000 --command "git add -A && git commit -m \"auto: update content\" && git push"
