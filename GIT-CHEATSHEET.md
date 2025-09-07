# Git Cheatsheet – Garden Store

## Первичная настройка (сделано один раз)
```bash
git init
git branch -M main
git remote add origin https://github.com/DmitrijDilman/garden-store.git
git push -u origin main --force-with-lease

Каждый раз после изменений
git add .
git commit -m "описание изменений"
git push

Полезные команды

git status      # проверить статус файлов
git remote -v   # посмотреть, куда пушим
git branch      # показать ветку
git pull        # подтянуть изменения с GitHub

git checkout main
git pull
git switch -c dev
git push -u origin dev

