The project's building blocks and assumptions:
1. Created with nextjs create app
   1. The server resides under `pages/api`
2. The persistency is done using [prisma](https://www.prisma.io/) ORM over sqlite 
   1. The initial data is persisted
   2. The data itslef is located under `prisma/dev.db`

## Work-of-art design:
![](/Users/udibenamitai/Desktop/Screen Shot 2022-03-13 at 23.25.41.png)

## To run
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in the browser.
