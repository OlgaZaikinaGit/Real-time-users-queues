const { exec } = require('child_process')
const path = `${process.cwd()}/path`

exec('docker build -t digital-queue-mysql ./my-sql &&' +
  'docker run -d -p 3306:3306 --name digital-queue-mysql ' +
  '-v' + process.cwd() + '\\my-sql\\sql-scripts:/docker-entrypoint-initdb.d/ ' +
  '-e MYSQL_ROOT_PASSWORD=supersecret ' +
  '-e MYSQL_DATABASE=digitalQueue ' +
  'mysql && npx prisma init', (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`)
    return
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`)
    return
  }
  console.log(`stdout: ${stdout}`)
})
