// typeorm.config.ts
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
<<<<<<< HEAD
  password: '1234', // COLOQUE SUA SENHA AQUI
=======
  password: '123456', // COLOQUE SUA SENHA AQUI
>>>>>>> 0c05cfa6af6e0182e30aaa2e921143658205d528
  database: 'products2',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
});