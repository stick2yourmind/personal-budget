In order to be able to run this project you must rename the "backend/.env.example" file 
to "backend/.env" and fill it.

# 1. Creating tables of db (SQL URL needed at backend/.env, see DATABASE_URL)
npm run-script backend-dev-db-migrate
# 2. Run the server in development mode
npm run-script backend-dev
# 3. To see database registers (optional)
npm run-script backend-dev-db-show

Other scripts:

# A. To Creating tables of db and run the server in development mode
npm run-script backend-dev-first
# B. To build backend's project
npm run-script backend-build
# C. To Creating tables of db, build the backend's project and run it:
npm run-script backend-first


Or you can run this whit your cmd terminal:
npm run-script backend-dev-db-migrate && npm run-script backend-dev