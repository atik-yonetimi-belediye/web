# Kahramanmaraş Onikişubat Belediyesi Atık Yönetim Sistemi - Web Arayüzü (Frontend) ♻️

Bu depo (repository), Onikişubat Belediyesi'nin Atık Yönetim Otomasyonu projesinin **Web Arayüzü (Frontend)** kodlarını içermektedir. Modern web teknolojileri kullanılarak geliştirilen bu arayüz; Yöneticiler (Admin), Çavuşlar, Şoförler ve Geri Dönüşüm Şirketleri için farklı panellere sahiptir.

---

## 🚀 Projenin Amacı ve Kullanıcı Rolleri

Sistem, 4 farklı kullanıcı rolüne göre özelleştirilmiş ekranlar sunar:

1. **Yönetici (Admin) Paneli:**
   - Şehirdeki tüm çöp konteynerlerinin anlık durumlarını **Canlı Harita** üzerinden takip etme.
   - Vatandaşlardan gelen şikayetleri (fotoğraflı olarak) okuma, durumunu "İnceleniyor" veya "Çözüldü" olarak güncelleme.
   - Geri dönüşüm firmalarının sisteme katılma taleplerini onaylama veya reddetme.
   - Şikayet ve şirket verilerini **Tek tıkla Excel (CSV)** olarak bilgisayara indirme.
   - Recharts ile kodlanmış interaktif Pasta ve Sütun grafikleriyle anlık istatistiksel özetleri görüntüleme.

2. **Çavuş Paneli:**
   - Çavuşun sorumlu olduğu mahalledeki konteynerlerin harita üzerinden görüntülenmesi.
   - Haritada herhangi bir noktaya tıklayarak anında yeni konteyner veya araç ekleme.
   - Araçlara yeni şoförler atama ve aktif/pasif durumlarını yönetme.

3. **Şoför Paneli:**
   - Şoföre atanan güzergahtaki konteyner listesinin görüntülenmesi.
   - Toplanan konteynerlerin "Toplandı" olarak işaretlenerek sisteme (son toplanma saati olarak) işlenmesi.

4. **Şirket Paneli:**
   - Geri dönüşüm şirketlerinin sisteme entegre olması ve belediye ile koordineli çalışabilmesi için özel takip ekranları.

---

## 🛠️ Kullanılan Teknolojiler (Tech Stack)

Bu proje, tamamen modern frontend teknolojileri kullanılarak, hız ve görsellik ön planda tutularak geliştirilmiştir.

* **Core:** React.js (v18+) ve Vite (Hızlı build aracı)
* **Routing:** React Router v6
* **Tasarım ve Stilleme:** Vanilla CSS, CSS Variables (Tema yönetimi için) ve Glassmorphism tasarım dili.
* **Harita ve Lokasyon:** React Leaflet (`react-leaflet`, `leaflet`)
* **Grafik ve İstatistik:** Recharts (Dinamik ve animasyonlu pasta/sütun grafikleri)
* **İkonlar:** Lucide React
* **HTTP İstemcisi:** Axios (JWT token yönetimi ve interceptor yapısıyla)

---

## ✨ Öne Çıkan Özellikler (Premium Features)

* 🌙 **Karanlık Mod (Dark Mode):** Tüm sistem genelinde, tek bir butona tıklayarak devreye giren global karanlık mod. Seçiminiz tarayıcınızın hafızasına (localStorage) kaydedilir.
* 🗺️ **Canlı ve İnteraktif Harita:** Konteynerleri, renk kodlarıyla (örneğin Katı Atık = Turuncu, Geri Dönüşüm = Mavi) haritada Pin'ler. Herhangi bir konteynere tıklandığında "Son Toplanma Saati" anında okunur.
* 📊 **Gerçek Zamanlı Veri ve Grafikler:** Admin panelindeki istatistikler (şikayet durumları vb.) anlık olarak API'den çekilir ve animasyonlu grafiklere dönüştürülür.
* 🔒 **Güvenli JWT Doğrulaması (Auth):** Kullanıcı girişleri JWT token ile sağlanır ve yetkisiz kişilerin diğer rollere ait panellere girmesi React Router tarafından anında engellenir.

---

## 📁 Klasör Yapısı (Folder Structure)

```text
src/
├── assets/         # Statik resimler ve logolar
├── components/     # Tekrar kullanılabilen global bileşenler (Button, Input, Layouts)
├── context/        # React Context API dosyaları (AuthContext - Kullanıcı oturumu için)
├── pages/          # Uygulamanın Ana Sayfaları
│   ├── admin/      # Yönetici paneli ekranları (Dashboard, Harita, Şikayetler, Şirketler)
│   ├── cavus/      # Çavuş paneli ekranları
│   ├── sofor/      # Şoför paneli ekranları
│   └── sirket/     # Şirket paneli ekranları
├── services/       # Backend ile iletişim kuran Axios servisleri (api.js)
├── App.jsx         # Router tanımlamaları ve ana uygulama iskeleti
└── index.css       # Global stiller, Dark Mode renk değişkenleri ve Glassmorphism efektleri
```

---

## 🖥️ Kurulum ve Çalıştırma (Kurulum Rehberi)

Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin. (Bilgisayarınızda [Node.js](https://nodejs.org/) kurulu olmalıdır).

**1. Depoyu bilgisayarınıza indirin:**
```bash
git clone https://github.com/atik-yonetimi-belediye/web.git
cd web
```

**2. Gerekli kütüphaneleri (bağımlılıkları) kurun:**
```bash
npm install
```

**3. Geliştirme (Development) sunucusunu başlatın:**
```bash
npm run dev
```

> **Not:** Uygulama varsayılan olarak `http://localhost:5173` adresinde çalışacaktır.
> 
> *ÖNEMLİ:* Uygulamanın verileri getirebilmesi için **Backend API** sunucusunun (varsayılan: `http://localhost:5000/api`) aynı anda çalışıyor olması gerekmektedir. Eğer Backend adresini değiştirmek isterseniz `src/services/api.js` dosyasından `BASE_URL` değişkenini güncelleyebilirsiniz.

---

**Kahramanmaraş Onikişubat Belediyesi için gururla ve sevgiyle kodlanmıştır! 🇹🇷**
