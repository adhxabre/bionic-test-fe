# Architecture Application

Arsitektur aplikasi sendiri ada 3 umumnya, yakni monolithic, software-oriented, dan microservices
Arsitektur yang menurut saya saat ini banyak dipakai dan cukup mumpuni ialah microservices. Mengapa?
Microservices memperbolehkan kita untuk membangun sebuah aplikasi dengan membagi - baginya menjadi beberapa aplikasi kecil lainnya, teknologi ini sendiri cukup baik karena kita tetap bisa menjalankan aplikasi kita walaupun salah satu service-nya nanti sedang dalam gangguan, sehingga tidak menimbulkan kegagalan dalam penggunaan aplikasi itu sendiri. Buruknya adalah, aplikasi ini sendiri baru bisa berjalan berbarengan dengan penggunaan **Docker** dan **Kubernetes** yang tentunya memerlukan konfigurasi lebih.