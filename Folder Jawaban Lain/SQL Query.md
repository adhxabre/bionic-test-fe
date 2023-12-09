# QUERY 1

```sql
SELECT item FROM ASSET WHERE user_id = "zaki"
```

## Result

> Item
- notebook
- bag
- mobile phone


# QUERY 2

```sql
SELECT u.user_id, a.item FROM USER u LEFT JOIN ASSET a ON u.user_id = a.user_id
```

## Result
user_id     | asset

wildan      | notebook,bag

zaki        | notebook,bag,mobile phone