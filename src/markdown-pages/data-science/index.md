---
slug: '/data-science/guide'
date: '2019-05-04'
title: 'A Guide to Data Science'
---

![header](https://raw.githubusercontent.com/ds-itb/guide/master/Picts/Header.webp)

_Data Science itu luas, dan banyak yang bingung mau mulai masuk dari mana._ <br>Artikel ini dibuat dengan harapan untuk menjawab kebingungan itu.
    
**Author: [Ardysatrio Fakhri Haroen](https://www.linkedin.com/in/h-ardyh/?originalSubdomain=id)**

# Intro

## Data Science?

Aku yakin gak sedikit dari pembaca yang gak kebayang _Data Science_ itu ngapain. Mungkin cuma pernah denger istilahnya aja karena lagi **_BOOMING_**. Oke, kita liat istilah formalnya:

> _Data science is an **inter-disciplinary** field that uses scientific methods, processes, algorithms and systems to **extract knowledge and insights** from many structural and unstructured data._
>
> ~ Wikipedia

Intinya ada 2: _inter-disciplinary_ dan _extracting knowledge and insight_. Jadi bisa dibilang juga:

> Memakai pengetahuan dari berbagai bidang untuk dapat ilmu dan _insight_ dari data.

## Case Examples

Biar gak ngawang, di bawah ada beberapa contoh dari **_Data Science Problem Statements_**:

1. _Given records of ticket transactions for the past month, \
   predict how many extra tickets will be booked everyday for the next week._

2. _Given pictures of product and their category, \
   build an automatic categorizer of product pictures._

3. _Given a number of texts and their category (containing explicit content or not), \
   build an automatic categorizer for unlabeled texts._

4. _Given a set of images, \
   build an image segmentation algorithm to find all the same landmarks._

Cari contoh lainnyaa di [Kaggle](https://www.kaggle.com), [DrivenData](https://www.drivendata.org), [MachineHack](https://www.machinehack.com/), [Analytics Vidhya](https://www.analyticsvidhya.com/), dan platform kompetisi lain.

Memang kedengeran susah, dan emang susah, tapi di sini lah inti artikel ini, yakni

> Memberikan sedikit kepedean buat pembaca untuk nyobain bidang ini

## Tipe-Tipe Task/Problem

_Data Science_ luas karena masalah yang tercakup di dalamnya sangat banyak. Tapi secara umum, kita bisa bikin klaster-klaster untuk permasalahan yang dibahas dalam _Data Science_, terutama terkait competitive data science:

### Berdasarkan Bentuk Data (yang Umum)

1. **Tabular Data** \
   Maksudnya, data disimpen dalam suatu bentuk tabel.

   Tipe ini yang paling mudah dibayangin prosesnya dan _recommended_ buat yang baru masuk dan mau main-main dulu ke _Data Science_.

   Contoh kompetisi for beginner:
   - [Titanic](https://www.kaggle.com/c/titanic)
   - [House Price Prediction](https://www.kaggle.com/c/house-prices-advanced-regression-techniques)

2. **Image Data** \
   Bidang terkait ini biasa disebut _Computer Vision_.

   Contoh task-nya antara lain:

   - mengklasifikasi suatu gambar,
   - mendeteksi suatu objek dalam suatu gambar, atau
   - membuat batasan objek2 dalam gambar, dll.

   Contoh kompetisi for beginner:

   - [Classifying Flowers](https://www.kaggle.com/c/tpu-getting-started)
   - [Detecting Pneumonia](https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia)

3. **Text Data** \
   Bidang terkait ini biasa disebut _Natural Language Processing (NLP)_.

   Contoh task-nya antara lain:

   - analisis sentimen atau klasifikasi emosi,
   - aplikasi peringkasan berita,
   - aplikasi mesin penerjemah, dll.

   Contoh kompetisi for beginner:

   - [Detecting Fraud Tweets](https://www.kaggle.com/c/nlp-getting-started)
   - [News Category Prediction](https://www.kaggle.com/rohan9889/predict-news-category/code)

### Berdasarkan Tipe Pembelajaran

![ML](https://raw.githubusercontent.com/ds-itb/guide/master/Picts/ML.png)

1. Supervised Learning

   _Supervised Learning_ adalah tipe pembelajaran ketika model atau algoritma mempelajari pola dari data yang sudah berlabel. Tipe pembelajaran ini adalah yang paling sering dimanfaatkan pada _Competitive Data Science_.

   Ibaratnya, kita **mengajari** model untuk membedakan yang mana bunga Mawar, Melati atau Bugenvil dengan cara memberi gambar masing-masing bunga beserta namanya. Setelah model dirasa sudah cukup bisa mengenali karakteristik dari bunga-bunga ini maka kita bisa main tebak-tebakan dengan model ini dengan memberinya gambar lain tanpa diberikan nama.

   _Supervised Learning_ biasanya terasosiasi dengan beberapa permasalahan populer di _Machine Learning_ yaitu:

   - **Regression**: meminta model untuk memprediksi nilai kontinu
   - **Clasification**: meminta model untuk memprediksi nilai diskrit

2. Unsupervised Learning

   _Unsupervised Learning_ adalah tipe pembelajaran ketika model atau algoritma mempelajari pola dari data yang tidak memiliki label.

   Ibaratnya, kita ditempatkan di satu ruangan bersama dengan 100 orang yang belum kita kenal, kemudian kita diminta untuk mencari kesamaan masing-masing dan membentuk grup sebanyak n. Setelah terbentuk kelompok, akhirnya kita baru tau nih Kelompok A ternyata kumpulan penonton video masak, Kelompok B ternyata kumpulan penonton video kucing, dan Kelompok C ternyata kumpulan orang yang tidak punya kesamaan dengan kelompok lainnya.

   Unsupervised learning biasanya terasosiasi dengan beberapa permasalahan:

   - **Clustering**: mengelompokkan data berdasarkan kemiripan
   - **Anomaly Detection**: mendeteksi keabnormalan atau hal ganjil dari data
   - **Association**: mencari item lain yang terasosiasi dengan item tertentu

3. Reinforcement Learning

   _Reinforcement Learning_ adalah tipe pembelajaran ketika model/algoritma/agen hanya diberikan sebuah _goal_ dan _reward_ tanpa diberi tahu bagaimana cara mencapai _goal_ tersebut.

   Model hanya diberikan sekumpulan langkah-langkah yang boleh dilakukan dan akan mendapatkan _reward_ apabila langkah yang dipilih menuju atau mendekati _goal_. Sebaliknya apabila langkah yang diambil justru menjauhi _goal_ maka agen atau model diberikan _punishment_.

   Ibaratnya seperti bermain _game_, ketika kita berhasil menyelesaikan _level_ maka kita akan mendapat _badge_. Sedangkan ketika kita melakukan langkah yang salah maka permainan akan berakhir.

# Technical Skills Checklist

## Technical Prerequisite

_Skills_ penting yang dibutuhin sebelum masuk ke _Skill_ Spesifik _Data Science_

### 1. Basic Programming

Ini esensial banget. Bukan berarti 100% dalam _Data Science_ itu ngoding yaa. Tapi jangan masuk dulu ke _Data Science_ kalo topik dasar pemrograman kayak _if-else_, _looping_, _function and procedures_, belom terlalu lancar, karena **eratnya hubungan antara _Data Science_ dan _Programming_**. Bahkan topik yang _intermediate_ di _programming_ seperti _Object Oriented Programming (OOP)_ juga **good to have** buat lebih mudah ngerti dokumentasi dari berbagai _tools_. Tanpa ilmu _programming_, kita gak akan bisa berjalan terlalu jauh atau menyelam terlalu dalam.

Buat milih bahasa, kalo mau main data tabular bisa pake R atau Python. Kalo mau tipe data yang lain, _support_ buat Python jauh lebih kuat. Jadi penulis pribadi nyaranin **Python** aja.

#### Di mana Belajarnya?

- [Youtube](https://www.youtube.com/) dan [Google](https://www.google.com/) (Cari "_Introduction to Python_" atau yang semisal)
- [Codecademy](https://www.codecademy.com/)
- [W3Schools](https://www.w3schools.com/)
- [FreeCodeCamp](https://www.freecodecamp.org/)
- [Khan Academy](https://www.khanacademy.org/)

### 2. Basic Math & Statistics

_Basic Math_ di sini setidaknya ngerti operasi matriks, dan **statistik dasar** kayak _mean_, _standard deviation_, dsb. Gunanya buat ngerti konsep-konsep dasar dan agar ketika nyusun solusi, bisa punya gambaran besar cara kerjanya gimana, bukan cuma numpuk _tools_ doang hehe

> Dari 2 skill di atas, penulis pribadi simpulin kalo rata-rata lulusan SMA udah cukup untuk mulai masuk ke _Data Science_, asal udah bisa ngoding.

> Berarti kalo secara _timeline_ ITB, rata-rata mahasiswa ITB bisa mulai di semester 2 TPB.

#### Di mana Belajarnya?

- SMA
- [Youtube](https://www.youtube.com/) dan [Google](https://www.google.com/) (Cari "_Basic Statistics_" atau yang semisal)
- [StatQuest Youtube Channel](https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw)
- [Coursera - Basic Statistics](https://www.coursera.org/courses?query=basic%20statistics)
- [FreeCodeCamp - Statistics for Data Science](https://www.freecodecamp.org/news/statistics-for-data-science/)

## Specific Technical Skills

_Skills_ penting yang perlu dipelajari ketika udah mulai masuk ke _Data Science_

### 1. Data Analysis Tools

_Tools_ buat analisis data. Di antaranya:

- _Pandas Library for Python_
- _R Programming Language_

Dua _tools_ di atas sangat _valuable_ karena berbasis _programming_, jadi cukup _powerful_ untuk meng-_handle_ berbagai macam sumber data. Tapi bisa dipertimbangkan juga yang berbasis _app_ seperti:

- Excel
- Tableau
- Power BI
- Google DS

Tools di atas terutama penting banget ketika ngerjain data tabular dan berhubung TPB semester 1 udah diajarin pandas, itu udah jadi foundation yg sangat bagus utk mulai.

#### Di mana Belajarnya?

- [Kaggle Learn](http://kaggle.com/learn)
- [DataQuest](https://www.dataquest.io/)
- [DataCamp](https://www.datacamp.com/)

### 2. Basic Data Preprocessing Concepts

Proses apa aja yang dilakuin ke sebuah data. Di antara contoh istilahnya:

- _Data Cleansing_
- _Null or Missing Value Handling_
- _Outlier Handling_
- _Remove Duplicate_
- _Normalization_

#### Di mana Belajarnya?

- [Kaggle Learn](http://kaggle.com/learn)
- [DataQuest](https://www.dataquest.io/)
- [DataCamp](https://www.datacamp.com/)

### 3. Basic Machine Learning Model Concepts

Kita perlu tau secara garis besar cara kerja suatu model _Machine Learning_, supaya kita bisa milih _preprocessing_ data yang tepat untuk model itu, dan gimana caranya kita mainin (_tuning_) algoritmanya untuk ngasih performa optimal. Gak harus ngerti sedalem-dalemnya, cuman mungkin sebatas sampai bisa jelasin secara umum model itu gimana cara kerjanya.

#### Di mana Belajarnya?

- [Kaggle Learn](http://kaggle.com/learn)
- [StatQuest Youtube Channel](https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw)
- [Machine Learning Mastery Blog](https://machinelearningmastery.com/)

### 4. Data Science Workflow

Setelah memahami konsep-konsep model _Machine Learning_ maupun langkah-langkah pemrosesan data, kita perlu tau juga step-step yang biasanya dilakukan oleh para _Data Scientist_ dari awal sampai akhir secara end-to-end. Framework paling umum yang digunakan namanya **CRISP-DM**. Untuk belajar lebih lanjut bisa dibaca [di sini](http://www.kuliahkomputer.com/2018/07/crisp-dm.html)

<div align='center'>

![crisp](https://raw.githubusercontent.com/ds-itb/guide/master/Picts/crisp-dm.png)

</div>

# Softskills Checklist

_Data Science_ sangat luas dan berhubungan dengan banyak ketidakpastian, dan dalam medan seperti itu, ada **_softskills_** tertentu yang berguna untuk kita miliki, di samping hardskill, ketika menyelesaikan suatu problem:

## A. Semangat Eksplorasi dan Belajar Mandiri

**"Apa yang belum aku tahu? Metode apa yang belum dipakai?"**

Sebagai bidang yang sangat luas, _Data Science_ sering punya topik-topik baru yang muncul dengan laju yang sangat cepat. Kita gak bisa mengandalkan satu kali belajar aja untuk bisa mengerjakan semua task _Data Science_. Bahkan bisa aja kita udah menyelesaikan kompetisi di suatu topik, dan ketika kita masuk ke kompetisi berikutnya, 90% dari kompetisi itu berisi hal baru yang kita harus pelajari. Maka mindset **_continuous learning_** jadi sangat penting dalam _Data Science_.

## B. Skeptis secara Moderat

**"Alur ini valid gak ya?"**

Semangat eksplorasi ada baiknya dibarengi dengan keraguan yang proporsional. Gak bisa setiap kali kita tau suatu metode baru, kemudian kita terapkan metode tersebut kepada setiap _problem_. Hal ini karena **setiap data, dan setiap _problem_ mempunyai karakteristik yang berbeda**. Bahkan untuk _task_ yang sama, misalkan memprediksi _demand_ barang, jika tipe data dari dua buah _problem_ berbeda, maka kita bisa aja butuh metode pemrosesan data yang berbeda, dan sangat mungkin pakai model yang berbeda. Bagaimana kita menerapkan _softskill_ ini, bergantung kepada _softskill_ yang ketiga.

## C. Passion untuk Memahami Konsep

**"Ini maksudnya gimana ya? Bisa dipake di mana ya?"**

Untuk tau apakah suatu metode cocok untuk suatu persoalan, kita perlu paham secara garis besar **bagaimana metode itu bekerja**, dan **untuk tipe persoalan seperti apa** dia baiknya. Hal ini menuntut kita untuk selalu '**penasaran**' tentang cara kerja dari suatu metode/library/framework yang baru kita pelajari. Gak cuma belajar cara memakai/ngodingnya saja, atau bahkan cuma **copas** kodenya saja.

_Note_: Jangan salah, copas kode itu sangat biasa ya hehe, cuman paling nggak coba dimengerti apa maksud kodenya

# (Possible) Learning Flow

![lf](https://raw.githubusercontent.com/ds-itb/guide/master/Picts/learning-flow.jpg)

_Data Science_ punya banyak sekali pintu masuk, dan penulis sendiri juga percaya kalo cara belajar setiap orang sebaiknya _personalized_ untuk orang tersebut. Tapi bagian ini ditulis cuma sebagai masukan, untuk menghapus sedikit kebingungan, buat mereka yang masih belum ada bayangan sama sekali dari mana mau mulai.

### 1. Belajar "Secukupnya"

Untuk sekedar masuk ke _Data Science_, penulis percaya kalo gak terlalu banyak yang harus dikuasai terlebih dahulu. Gak seperti bidang-bidang macam fisika kuantum, _quantum computing_, atau _large-scaled distributed system_, dll. Emang, bidang-bidang di _Data Science_ banyak yang tingkat kompleksitasnya tinggi. Hal itu terlihat jelas kalo kita coba baca paper-paper terkini di bidang _Data Science_.

Tapi buat sekedar memulai, untuk sekedar mengikuti kompetisi atau mengerjakan proyek skala kecil, menurut penulis setidaknya cuma perlu 2 skill yang dikuasai, yaitu sebagaimana yang udah ditulis sebelumnya: **Basic Programming dan Basic Math**.

Menurut penulis poin **#1** penting karena banyak hal di bidang ini yang hanya bisa dipelajari/dimengerti ketika sudah masuk langsung (_hands-on_). Jadi lebih penting untuk "**masuk**" dahulu dibandingkan "**mempersiapkan untuk masuk**".

### 2. Mulai Ngerjain Sesuatu

Mulai ikut kompetisi-kompetisi _Data Science_, atau ngerjain proyek kecil-kecilan. Ide proyek dan implementasinya banyak banget yang bisa diambil dari internet.

Beberapa sumber ide dan implementasi proyek:

- [YouTube](https://www.youtube.com/)
- [Medium](https://medium.com/)
- [Machine Learning Mastery](https://machinelearningmastery.com/)

Lomba-lomba yang bisa diikuti:

- Lomba di Platform
- [Kaggle](https://www.kaggle.com)
- [DrivenData](https://www.drivendata.org)
- [Analytics Vidhya](https://www.analyticsvidhya.com/)
- Lomba yang diadain lembaga (perusahaan/universitas) \
- EY NextWave Data Challenge (diadain perusahaan konsultasi EY)
- Shopee Code League (diadain e-commerce Shopee)
- JOINTS (UGM)
- ITToday (IPB)

**Note**: ini hanya beberapa yang pernah ada, tidak menjamin lomba ini diadakan rutin tiap tahun.


Untuk **HMIF ITB**, bisa cari berbagai lomba yang _up-to-date_ di [link ini](https://bit.ly/informasiLombaHMIF) ya, termasuk di antaranya lomba _Data Science_. Masuknya harus pake email _std.stei_

### 3. Cari Sumber-Sumber untuk Menyelesaikan Lomba atau Proyek

Biasanya suatu lomba atau proyek punya topik/arah yang jelas. Misalkan yang satu NLP, yang satu _Computer Vision_, yang satu _Time Series Forecasting_. Masing-masing bidang punya metode, proses, dan model tersendiri yang kita perlu pelajarin ketika masuk. Di tahap ini kita bisa mencari artikel/paper/tutorial yang mendukung pengerjaan itu.

### 4. Repeat #1

3 Tahap di atas kita ulang-ulang lagi dengan ngerjain _problem_ dan kompetisi yang bervariasi.

# Other Great Resources

Berikut beberapa kompilasi sumber-sumber lain yang bisa dipertimbangkan, penulis coba kelompokkan berdasarkan tipe pembelajarannya:

### 1. Hands-on

Sumber untuk latihan, berupa ide projek, kompetisi, task-task, dan dataset

- [Kaggle](http://kaggle.com)
- [UCI ML Repository](https://archive.ics.uci.edu/ml/index.php) (berisi berbagai dataset, yang dipake di paper)
- [DrivenData](https://www.drivendata.org/)
- [Zindi](https://zindi.africa/)
- [MLContests](https://mlcontests.com/)
- [arXiv](https://arxiv.org/) (berisi ribuan _Research Papers_, _include Code and Dataset_)

### 2. Course

Course bisa dianggap kayak kuliah: ada materi, ada tugas, ada nilai. Di antara keuntungan course adalah pembelajaran yang terstruktur

- [Coursera](https://www.coursera.org/)
- [Machine Learning by Stanford University's Andrew Ng](https://www.coursera.org/learn/machine-learning)
- [Deep Learning Specialization](https://www.coursera.org/specializations/deep-learning)
- [Data Science Courses by IBM](https://www.coursera.org/professional-certificates/ibm-data-science)
- [Udemy](https://www.udemy.com/)
- [Udacity](https://www.udacity.com/)
- [edX](https://www.edx.org/)
- [MIT's Intro to Deep Learning](http://introtodeeplearning.com/)

### 3. Buku

Bagi yang suka fokus ke teori, dan ingin belajar dengan _pace_ tersendiri.

- Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow: Concepts, Tools, and Techniques to Build Intelligent Systems
- [Deep Learning with PyTorch](https://pytorch.org/deep-learning-with-pytorch)
- Introduction to Statistical Learning
- Buku-buku lain dari O-Reilly biasanya terkenal

### 4. Artikel

Bisa dibilang sumber informasi yang spesifik banget terhadap suatu _task_ atau bisa jadi fokusnya lebih ke memberikan _insight_ tentang bidang _Data Science_ secara umum.

- [Machine Learning Mastery Blog](https://machinelearningmastery.com/)
- [Towards Data Science Medium](https://towardsdatascience.com/)
- [Analytics Vidhya](https://www.analyticsvidhya.com/blog/)

### 5. Tutorials

- [Tensorflow Tutorials](http://tensorflow.org/tutorials/)
- [Kaggle Learn](http://kaggle.com/learn)
- [Medium Articles](http://medium.com)
- [PyTorch Tutorials](https://pytorch.org/tutorials/)
- [YouTube](https://www.youtube.com/)

**Note**: Mayoritas _library/framework Machine Learning_ punya dokumentasi yang memuat tutorial penggunaan _library/framework_ tersebut. Makanya penting buat kita sering-sering main ke _website_ dokumentasi.

# Final Words

Akhir kata, semoga guide ini bisa membantu. Gak perlu takut dan mikir "apa aku punya talent yang cukup ya?". Karena kebanyakan yang menghalangi itu bukan "kurang talent", tapi distraksi-distraksi kayak "social media", "YouTube", "Netflix", dan apapun lah itu macamnya. Motivasi dan disiplin lebih penting dalam proses belajar dibanding talent.

Terima kasih dan selamat belajar!

# Ucapan Terima Kasih

- Ahmad Izzan
- Christian Wibisono
- Ilham Firdausi Putra

Sebagai kontributor-kontributor awal!

- CnC HMIF ITB sebagai pendorong pertama ditulisnya artikel ini
- Seluruh kontributor langsung maupun tak langsung di repository ini
