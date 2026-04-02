@echo off
cd /d C:\Users\noteb\micro-saas-spain
echo Watching D:\GRAVACOES LOL\meta-folder-2 for new images...
echo Press Ctrl+C to stop.
chokidar "D:/GRAVACOES LOL/meta-folder-2/*.jpg" --debounce 3000 --command "node C:/Users/noteb/Downloads/process-meta-images.js && git add -A && git commit -m \"images: add meta ai blog images\" && git push"
