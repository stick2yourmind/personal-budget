In order to be able to run this project you must rename the "backend/.env.example" file 
to "backend/.env" and fill it.

# 1. Creating tables of db (SQL URL needed at backend/.env, see DATABASE_URL)
npm run-script backend-dev-db-migrate
# 2. Run the server
npm run-script backend-dev
# 3. To see database registers (optional)
npm run-script backend-dev-db-show