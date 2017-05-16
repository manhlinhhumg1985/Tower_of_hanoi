# Tower_of_hanoi
## Sử dụng thư viện D3.js
* Download trực tiếp trên trang chủ D3js.com
* Dùng link CDN
## Phân tích bài toán
* Đặt tên các cọc là A, B, C (ở đây: A = Cọc Nguồn, B = Cọc Trung Gian, C = Cọc Đích).
* Gọi n là tổng số đĩa.
* Đánh số đĩa từ 1 (nhỏ nhất, trên cùng) đến n (lớn nhất, dưới cùng).
## Để chuyển n đĩa từ cọc A sang cọc C cần:
* 1. Chuyển n-1 đĩa từ cọc A sang B. Chỉ còn đĩa n trên cọc A.
* 2. Chuyển đĩa n từ cọc A sang cọc C.
* 3. Chuyển n-1 đĩa từ B sang C cho các đĩa có đường kính nhỏ hơn lần lượt nằm trên đĩa n.
#### Dùng thuật đệ quy để giải quyết bài toán này, tiến hành bước 1 và 3, áp dụng lại thuật giải cho n-1.
### Ví dụ cho 3 đĩa, các bước tiến hành:
1. chuyển đĩa 1 sang cọc C.
2. chuyển đĩa 2 sang cọc B.
3. chuyển đĩa 1 từ C sang B sao cho nó nằm lên 2.
##### Vậy ta hiện có 2 đĩa đã nằm trên cọc B, cọc C hiện thời trống
4. chuyển đĩa 3 sang cọc C
5. lặp lại 3 bước trên để chuyển 1 & 2 cho nằm lên 3.
```javascript
![Image of Ha Noi Tower](Tower_of_Hanoi.gif)
```

### Các bước chạy của thuật toán với trường hợp n=3
* DISKS =3          |1. Move(N-1,begin,end,med)
                    |2. Move(1,begin,med,end)
                    |3. Move (N-1,med,begin,end)
```javascript
                    
                                | Move(1,A,B,C)----------> (chuyển đĩa từ A -> C)(1)
                |Move(2,A,C,B)->| Move(1,A,C,B)----------> (chuyển đĩa từ A -> B)(2)
                |               | Move(1,C,A,B)----------> (chuyển đĩa từ C -> B)(3)
                |
Move(3,A,B,C)-->|Move(1,A,B,C)---------------------------> (chuyển đĩa từ A -> C)(4)
                | 
                |               
                |Move(2,B,A,C)->| Move(1,B,C,A)----------> (chuyển đĩa từ B -> A)(5)
                                | Move(1,B,A,C)----------> (chuyển đĩa từ B -> C)(6)
                                | Move(1,A,B,C)----------> (chuyển đĩa từ A -> C)(7)
```


* Theo sơ đồ trên thì các bước chạy của thuật toán sẽ đi từ (1)..->(7)









