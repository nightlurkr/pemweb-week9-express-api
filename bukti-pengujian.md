# Bukti Pengujian

Dijalankan pada server lokal http://localhost:3000 setelah `npm start`.
Output di bawah adalah hasil nyata dari terminal.

## 1. GET /products

```bash
curl -i http://localhost:3000/products
```

Status: `200`

```json
[{"id":1,"name":"Buku","price":15000},{"id":2,"name":"Pulpen","price":5000}]
```

## 2. GET /products/1

```bash
curl -i http://localhost:3000/products/1
```

Status: `200`

```json
{"id":1,"name":"Buku","price":15000}
```

## 3. GET /products/999 (ID tidak ditemukan)

```bash
curl -i http://localhost:3000/products/999
```

Status: `404`

```json
{"message":"Produk tidak ditemukan"}
```

## 4. POST /products

```bash
curl -i -X POST http://localhost:3000/products -H "Content-Type: application/json" -d "{\"name\":\"Penghapus\",\"price\":3000}"
```

Status: `201`

```json
{"id":3,"name":"Penghapus","price":3000}
```

## 5. POST /products tanpa price

```bash
curl -i -X POST http://localhost:3000/products -H "Content-Type: application/json" -d "{\"name\":\"Spidol\"}"
```

Status: `400`

```json
{"message":"Field price wajib berupa angka positif"}
```

## 6. GET /products setelah POST

```bash
curl -i http://localhost:3000/products
```

Status: `200`

```json
[{"id":1,"name":"Buku","price":15000},{"id":2,"name":"Pulpen","price":5000},{"id":3,"name":"Penghapus","price":3000}]
```

