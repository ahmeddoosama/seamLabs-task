cd /var/www/amanda-board-fe
rm package-lock.json
git pull origin master
npm i
npm run build 
pm2 restart amanda-board-fe