// ===== DATA KEMAMPUAN =====
const capabilitiesData = [
    {
        id: 1,
        name: 'Kursi & Sofa',
        category: 'kursi',
        icon: 'fa-chair',
        image: 'https://images.pexels.com/photos/9886150/pexels-photo-9886150.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Tinggi kursi ideal: 45 cm (dudukan) dari lantai. Sandaran sedikit dimiringkan 5-10° untuk kenyamanan maksimal.',
        description: 'Kursi tamu, kursi makan, kursi kantor, sofa 2/3 seater, sofa bed, kursi santai (relax chair), kursi bar, bangku panjang — semua ergonomis dan bisa disesuaikan.',
        options: ['Ukuran & tinggi custom', 'Model klasik/minimalis/kontemporer', 'Busa density tinggi (25-35 kg/m³)', 'Kain: linen, katun, kulit sintetis'],
        specs: [
            { label: 'Variasi', value: 'Tamu, makan, kantor, sofa, santai' },
            { label: 'Rangka', value: 'Jati, Mahoni, Trembesi, Besi' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '1-3 minggu' }
        ]
    },
    {
        id: 2,
        name: 'Meja',
        category: 'meja',
        icon: 'fa-table',
        image: 'https://images.pexels.com/photos/11112739/pexels-photo-11112739.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Tinggi meja kerja standar 72-75 cm. Meja makan 75 cm. Meja kopi 40-50 cm. Kami bisa buat ukuran berapapun sesuai postur tubuh Anda.',
        description: 'Meja makan (4-8 kursi), meja kopi, meja kerja/komputer, meja rias, meja bar, meja outdoor, meja lipat, meja multifungsi — dengan atau tanpa rak/laci.',
        options: ['Ukuran & tinggi custom', 'Bentuk kotak, bundar, oval, L-shape', 'Kombinasi kayu + besi/kaca', 'Finishing melamine/HPL/duco'],
        specs: [
            { label: 'Variasi', value: 'Makan, kopi, kerja, rias, bar' },
            { label: 'Material', value: 'Jati, Mahoni, Trembesi, Multiplek' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '2-4 minggu' }
        ]
    },
    {
        id: 3,
        name: 'Lemari & Kabinet',
        category: 'lemari',
        icon: 'fa-door-open',
        image: 'https://images.pexels.com/photos/6940699/pexels-photo-6940699.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Kedalaman lemari pakaian standar 55-60 cm (gantungan). Lemari dapur 50-60 cm. Jarak gantungan 90-100 cm untuk baju panjang.',
        description: 'Lemari pakaian (2/3/4 pintu), lemari dapur, lemari pajang (display cabinet), lemari TV/entertainment, lemari buku/arsip, sliding wardrobe, walk-in closet.',
        options: ['Sistem sliding/buka (ayun)', 'Interior: laci, rak, gantungan', 'Ukuran presisi hingga milimeter', 'Finishing HPL/cat duco/melamine'],
        specs: [
            { label: 'Variasi', value: 'Pakaian, dapur, pajang, TV, buku' },
            { label: 'Material', value: 'Multiplek, Jati, Mahoni' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '3-5 minggu' }
        ]
    },
    {
        id: 4,
        name: 'Tempat Tidur',
        category: 'tempat-tidur',
        icon: 'fa-bed',
        image: 'https://images.pexels.com/photos/14495872/pexels-photo-14495872.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Ukuran standar: Single (90×200), Double (120×200), Queen (160×200), King (180×200). Tinggi ranjang dari lantai ke spring bed: 45-55 cm.',
        description: 'Tempat tidur dengan headboard (polos/bermotif/empuk), ranjang bertingkat (loft bed), dipan tanpa spring bed, laci storage di bawah ranjang, sofa bed.',
        options: ['Semua ukuran (Single s/d King)', 'Headboard custom model', 'Dengan/tanpa laci storage', 'Model minimalis/klasik/kontemporer'],
        specs: [
            { label: 'Variasi', value: 'Single, Double, Queen, King, Loft' },
            { label: 'Material', value: 'Jati, Trembesi, Mahoni' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '2-3 minggu' }
        ]
    },
    {
        id: 5,
        name: 'Rak & Display',
        category: 'rak',
        icon: 'fa-layer-group',
        image: 'https://images.pexels.com/photos/4172103/pexels-photo-4172103.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Rak dinding maksimal beban 15-20 kg per sekat (tergantung material dan bracket). Kedalaman rak standar 20-35 cm.',
        description: 'Rak dinding floating, rak buku minimalis, rak sepatu + bangku, rak gantung, rak sudut, rak pajang (display shelf), rak tanaman, rak dapur, rak serbaguna.',
        options: ['Sistem floating / tempel dinding', 'Jumlah sekat & tinggi bebas', 'Warna dan cat sesuai keinginan', 'Bentuk geometris unik'],
        specs: [
            { label: 'Variasi', value: 'Dinding, buku, sepatu, gantung, sudut' },
            { label: 'Material', value: 'Multiplek, Mahoni, Pinus' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '1-2 minggu' }
        ]
    },
    {
        id: 6,
        name: 'Kitchen Set',
        category: 'kitchen-set',
        icon: 'fa-kitchen-set',
        image: 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Tinggi meja dapur standar 85-90 cm. Kabinet atas 40-60 cm dari meja. Semua diukur ergonomis agar nyaman memasak.',
        description: 'Kitchen set minimalis/modern lengkap: kabinet atas & bawah, meja dapur (table top), laci & rak piring, tempat kompor & sink, backsplash, serta island kitchen.',
        options: ['Layout: L-shape / U-shape / I-shape', 'Table top: multiplek, granit, beton', 'Finishing HPL/duco melamine', 'Aksesori: soft close, laci, dll'],
        specs: [
            { label: 'Variasi', value: 'Minimalis, Modern, Industrial' },
            { label: 'Material', value: 'Multiplek, Jati, Mahoni' },
            { label: 'Minimal pesan', value: '1 set' },
            { label: 'Estimasi', value: '3-6 minggu' }
        ]
    },
    {
        id: 7,
        name: 'Meja Rias & Dressing',
        category: 'meja-rias',
        icon: 'fa-mirror',
        image: 'https://images.pexels.com/photos/3770590/pexels-photo-3770590.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Tinggi meja rias ideal 70-75 cm. Cermin minimal 60×80 cm agar bisa melihat seluruh wajah dan bahu.',
        description: 'Meja rias dengan cermin (model duduk/berdiri), meja rias minimalis dengan laci, dressing table lengkap dengan storage, meja rias lipat untuk ruang sempit.',
        options: ['Ukuran & desain bebas', 'Cermin bulat/kotak/terang LED', 'Laci & rak storage custom', 'Model tempel dinding/free standing'],
        specs: [
            { label: 'Variasi', value: 'Duduk, berdiri, lipat, minimalis' },
            { label: 'Material', value: 'Mahoni, Jati, Multiplek' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '1-2 minggu' }
        ]
    },
    {
        id: 8,
        name: 'Buffet & Sideboard',
        category: 'buffet',
        icon: 'fa-cabinet-filing',
        image: 'https://images.pexels.com/photos/2766718/pexels-photo-2766718.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Tinggi buffet standar 80-90 cm. Kedalaman 40-50 cm. Cocok sebagai tempat penyimpanan sekaligus dekorasi ruang makan atau ruang tamu.',
        description: 'Buffet table / sideboard / credenza untuk ruang makan, ruang tamu, atau lobby. Dilengkapi rak, laci, dan kabinet dengan desain elegan.',
        options: ['Ukuran & jumlah pintu custom', 'Variasi: 2/3/4 pintu + laci', 'Pintu ayun/sliding tersedia', 'Finishing natural/cat duco'],
        specs: [
            { label: 'Variasi', value: 'Buffet, Sideboard, Credenza' },
            { label: 'Material', value: 'Jati, Mahoni, Multiplek HPL' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '2-3 minggu' }
        ]
    },
    {
        id: 9,
        name: 'Kabinet TV',
        category: 'kabinet-tv',
        icon: 'fa-tv',
        image: 'https://images.pexels.com/photos/3770588/pexels-photo-3770588.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Lebar kabinet TV minimal 20-30 cm lebih lebar dari TV. Tinggi tengah TV ideal sejajar mata saat duduk, sekitar 100-110 cm dari lantai.',
        description: 'Kabinet TV / entertainment center dengan rak untuk sound system, gaming console, dan aksesoris. Bisa dengan atau tanpa back panel, gantung atau berdiri.',
        options: ['Ukuran sesuai TV Anda', '+ Rak sound system & gaming', 'Model gantung / berdiri / built-in', 'Dengan back panel hias atau LED'],
        specs: [
            { label: 'Variasi', value: 'Gantung, berdiri, built-in' },
            { label: 'Material', value: 'Multiplek, Jati, Mahoni' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '1-3 minggu' }
        ]
    },
    {
        id: 10,
        name: 'Partisi & Panel',
        category: 'partisi',
        icon: 'fa-columns',
        image: 'https://images.pexels.com/photos/3770589/pexels-photo-3770589.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Partisi pembatas ruangan bisa jadi solusi cerdas untuk rumah terbuka (open plan). Kombinasikan dengan rak untuk fungsi 2-in-1.',
        description: 'Partisi ruangan (room divider) berbagai model: partisi ukir, partisi minimalis dengan rak, panel dinding dekoratif (wall panel), kisi-kisi kayu (slat wall).',
        options: ['Model: kisi, ukir, rak kombinasi', 'Tinggi & lebar disesuaikan', 'Bisa kombinasi kayu + kaca/besi', 'Cat warna sesuai interior'],
        specs: [
            { label: 'Variasi', value: 'Partisi, Panel Dinding, Slat Wall' },
            { label: 'Material', value: 'Jati, Mahoni, Pinus' },
            { label: 'Minimal pesan', value: '1 panel' },
            { label: 'Estimasi', value: '1-3 minggu' }
        ]
    },
    {
        id: 11,
        name: 'Furnitur Outdoor',
        category: 'outdoor',
        icon: 'fa-umbrella-beach',
        image: 'https://images.pexels.com/photos/6180791/pexels-photo-6180791.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Furnitur outdoor butuh kayu yang tahan cuaca seperti jati atau trembesi. Lapisi dengan finishing marine coating anti air & UV.',
        description: 'Kursi & meja taman, bangku outdoor, sofa balkon, decking kayu, rak tanaman outdoor, gazebo mini, furnitur kolam renang — tahan panas dan hujan.',
        options: ['Kayu khusus outdoor', 'Finishing marine coating', 'Bantal & kain anti air', 'Desain portabel/tetap'],
        specs: [
            { label: 'Variasi', value: 'Taman, balkon, kolam, gazebo' },
            { label: 'Material', value: 'Jati, Trembesi, Rotan' },
            { label: 'Minimal pesan', value: '1 set' },
            { label: 'Estimasi', value: '2-4 minggu' }
        ]
    },
    {
        id: 12,
        name: 'Pintu & Kusen',
        category: 'pintu',
        icon: 'fa-door-closed',
        image: 'https://images.pexels.com/photos/1691900/pexels-photo-1691900.jpeg?auto=compress&cs=tinysrgb&w=600',
        tip: 'Pintu kayu solid lebih kokoh dan tahan lama. Standar lebar pintu utama 80-90 cm, pintu kamar 75-80 cm.',
        description: 'Pintu kayu solid (panel/plank), pintu lipat (folding door), pintu geser (sliding door), kusen pintu & jendela, serta aksesoris pintu custom.',
        options: ['Model panel/plank/minimalis', 'Ukuran & ketebalan custom', 'Bisa kombinasi dengan kaca', 'Finishing natural/cat duco'],
        specs: [
            { label: 'Variasi', value: 'Solid, lipat, geser, kusen' },
            { label: 'Material', value: 'Jati, Mahoni, Meranti' },
            { label: 'Minimal pesan', value: '1 unit' },
            { label: 'Estimasi', value: '1-3 minggu' }
        ]
    }
];

// ===== DATA MATERIAL =====
const materialsData = [
    {
        id: 'jati',
        name: 'Kayu Jati',
        latin: 'Tectona grandis',
        image: 'https://images.pexels.com/photos/172289/pexels-photo-172289.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Jawa (Blora, Jepara), Indonesia',
        color: 'Coklat keemasan hingga coklat tua',
        description: 'Raja kayu Indonesia. Mengandung minyak alami yang membuatnya tahan rayap, cuaca ekstrem, dan kelembaban. Semakin tua usianya, warna dan seratnya semakin cantik. Cocok untuk furnitur indoor & outdoor, ukiran, hingga konstruksi kapal.',
        characteristics: 'Bobot berat, serat lurus/bergelombang, tekstur agak kasar, aroma khas, stabilitas dimensi sangat baik.',
        bestFor: 'Semua jenis furnitur, kursi tamu, meja, lemari, kitchen set, pintu, furnitur outdoor, lantai kayu.',
        tags: ['#Premium', '#TahanRayap', '#SeratIndah'],
        durability: 'Kelas Awet I',
        priceLevel: 'Premium (termahal)'
    },
    {
        id: 'mahoni',
        name: 'Kayu Mahoni',
        latin: 'Swietenia mahagoni',
        image: 'https://images.pexels.com/photos/36081877/pexels-photo-36081877.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Jawa, Sumatera, Indonesia',
        color: 'Merah kecoklatan hingga merah tua',
        description: 'Kayu favorit untuk furnitur klasik & modern. Warna merah kecoklatan yang elegan, serat indah, dan mudah dibentuk. Kuat dan stabil, cocok untuk furnitur dengan banyak detail ukiran atau profil rumit.',
        characteristics: 'Bobot sedang-berat, serat lurus/terpadu, tekstur agak halus, mudah dikerjakan & di-finishing, responsif terhadap cat duco.',
        bestFor: 'Kursi ukir, lemari klasik, meja rias, buffet, panel dinding, kusen pintu & jendela.',
        tags: ['#Elegan', '#MudahDibentuk', '#Ukiran'],
        durability: 'Kelas Awet II-III',
        priceLevel: 'Menengah ke Atas'
    },
    {
        id: 'pinus',
        name: 'Kayu Pinus',
        latin: 'Pinus merkusii',
        image: 'https://images.pexels.com/photos/82256/pexels-photo-82256.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Sumatera, Aceh, Indonesia',
        color: 'Putih kekuningan hingga coklat muda',
        description: 'Kayu ringan dengan warna terang natural yang sedang tren untuk furnitur bergaya Skandinavia, Japandi, dan minimalis modern. Harganya bersahabat, mudah dibentuk, dan memberikan kesan ruangan yang luas & cerah.',
        characteristics: 'Bobot ringan, serat lurus, tekstur agak kasar, getah melimpah (perlu perlakuan khusus), mudah dimachining.',
        bestFor: 'Rak dinding, meja minimalis, tempat tidur budget, panel dinding, furnitur anak, rumah kost/kontrakan.',
        tags: ['#Ringan', '#WarnaTerang', '#Modern'],
        durability: 'Kelas Awet IV-V',
        priceLevel: 'Ekonomis (murah)'
    },
    {
        id: 'sungkai',
        name: 'Kayu Sungkai',
        latin: 'Peronema canescens',
        image: 'https://images.pexels.com/photos/163999/pexels-photo-163999.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Sumatera, Jawa, Kalimantan',
        color: 'Kuning kecoklatan hingga coklat kemerahan',
        description: 'Alternatif kayu jati yang ekonomis. Warna cantik kuning kecoklatan, serat lurus bergelombang, dan cukup kuat untuk furnitur rumah tangga. Banyak digunakan sebagai material lemari, meja, dan panel dinding.',
        characteristics: 'Bobot sedang (550-650 kg/m³), serat lurus/bergelombang, tekstur agak kasar, sedikit kesat, mudah dikeringkan.',
        bestFor: 'Lemari pakaian, meja belajar, rak buku, panel dinding, kusen, daun pintu, furnitur rumah tangga.',
        tags: ['#AlternatifJati', '#Ekonomis', '#Cantik'],
        durability: 'Kelas Awet II-III',
        priceLevel: 'Menengah (terjangkau)'
    },
    {
        id: 'kamalina',
        name: 'Kayu Kamalina (Jati Putih)',
        latin: 'Gmelina arborea',
        image: 'https://images.pexels.com/photos/6692131/pexels-photo-6692131.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Jawa, Sumatera, Kalimantan, Sulawesi',
        color: 'Putih kekuningan hingga coklat muda pucat',
        description: 'Dikenal juga sebagai Jati Putih atau Gmelina. Kayu cepat tumbuh dengan warna terang natural yang cantik. Ringan, stabil, dan mudah dikerjakan. Semakin populer sebagai alternatif ekonomis untuk furnitur modern dan kontemporer.',
        characteristics: 'Bobot ringan (420-550 kg/m³), serat lurus, tekstur agak halus hingga sedang, pertumbuhan cepat, mudah dikeringkan & dikerjakan, responsif terhadap finishing.',
        bestFor: 'Furnitur interior modern, lemari, meja, rak, panel dinding, pulp & kertas, kayu lapis, konstruksi ringan.',
        tags: ['#JatiPutih', '#Ringan', '#Ekonomis'],
        durability: 'Kelas Awet III-IV',
        priceLevel: 'Ekonomis (terjangkau)'
    },
    {
        id: 'surian',
        name: 'Kayu Surian',
        latin: 'Toona sinensis',
        image: 'https://images.pexels.com/photos/36299690/pexels-photo-36299690.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Jawa Barat, Sumatera, Indonesia',
        color: 'Merah jambu hingga merah kecoklatan',
        description: 'Kayu surian memiliki warna merah jambu yang unik dan akan semakin gelap seiring waktu. Beraroma khas yang menyegarkan. Teksturnya halus dan mudah dikerjakan, menjadikannya pilihan populer untuk furnitur interior dan panel.',
        characteristics: 'Bobot ringan-sedang (400-600 kg/m³), serat lurus, tekstur halus-merata, aroma khas seperti bawang, mudah dikerjakan dan di-finishing.',
        bestFor: 'Panel dinding, plafon, furnitur interior ringan, lemari, meja, kusen, daun pintu, venir dekoratif.',
        tags: ['#AromaKhas', '#WarnaUnik', '#Halus'],
        durability: 'Kelas Awet III-IV',
        priceLevel: 'Menengah ke Bawah'
    },
    {
        id: 'trembesi',
        name: 'Kayu Trembesi',
        latin: 'Samanea saman',
        image: 'https://images.pexels.com/photos/172290/pexels-photo-172290.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Jawa, Indonesia',
        color: 'Coklat muda keemasan hingga coklat tua',
        description: 'Dikenal sebagai "kayu serat ular" karena pola seratnya yang liar, eksotis, dan tidak pernah sama antara satu papan dengan lainnya. Kayu trembesi bisa tumbuh sangat besar, sehingga ideal untuk meja panjang tanpa sambungan.',
        characteristics: 'Bobot sedang (500-700 kg/m³), serat eksotis/berpadu/bergerombol, tekstur agak kasar, mudah dikerjakan, finishing menyerap dengan baik.',
        bestFor: 'Meja panjang solid, meja kopi, bangku panjang, kursi santai, meja bar, furnitur dengan tampilan natural statement.',
        tags: ['#SeratUlar', '#Eksotis', '#MejaPanjang'],
        durability: 'Kelas Awet III-IV',
        priceLevel: 'Menengah'
    },
    {
        id: 'sonokeling',
        name: 'Kayu Sonokeling',
        latin: 'Dalbergia latifolia',
        image: 'https://images.pexels.com/photos/32193524/pexels-photo-32193524.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Jawa Tengah, Jawa Timur, Indonesia',
        color: 'Coklat tua keunguan dengan garis gelap',
        description: 'Kayu premium dengan serat bergaris-garis gelap yang sangat dekoratif. Termasuk kelompok kayu mewah (rosewood), sering digunakan untuk furnitur kelas atas, alat musik, dan barang kerajinan bernilai seni tinggi.',
        characteristics: 'Bobot berat (800-950 kg/m³), serat lurus/terpadu dengan pola garis kontras, tekstur halus-licin, mengkilap alami, sangat kuat dan stabil.',
        bestFor: 'Furnitur mewah, meja kerja premium, kursi kantor direktur, lemari pajang, alat musik (gitar, piano), barang seni, venir ekspor.',
        tags: ['#Rosewood', '#Mewah', '#GarisKontras'],
        durability: 'Kelas Awet I-II',
        priceLevel: 'Mahal (kelas ekspor)'
    },
    {
        id: 'multiplek',
        name: 'Multiplek (Plywood)',
        latin: 'Lapisan kayu presisi',
        image: 'https://images.pexels.com/photos/10111297/pexels-photo-10111297.jpeg?auto=compress&cs=tinysrgb&w=600',
        origin: 'Olahan pabrik (berbahan dasar kayu sengon, meranti, dll)',
        color: 'Kuning muda hingga coklat tergantung venir lapisan',
        description: 'Bukan kayu solid, melainkan lembaran yang terbuat dari beberapa lapisan kayu tipis yang direkatkan silang. Hasilnya: kuat, stabil (tidak mudah melengkung), presisi, dan ekonomis. Solusi cerdas untuk furnitur modern.',
        characteristics: 'Bobot ringan-sedang, sangat stabil dimensi, tidak mudah pecah, permukaan rata sempurna, tersedia berbagai ketebalan (3-30mm), mudah dicat & difinishing HPL.',
        bestFor: 'Lemari, kitchen set, rak, meja, kabinet TV, partisi, panel dinding, lantai, konstruksi ringan.',
        tags: ['#Ekonomis', '#Presisi', '#Stabil'],
        durability: 'Kelas Awet III-IV (tergantung lapisan)',
        priceLevel: 'Ekonomis (paling murah)'
    }
];

// ===== DATA PROSES =====
const processStepsData = [
    {
        number: 1,
        icon: 'fa-comment-dots',
        title: 'Konsultasi',
        description: 'Diskusikan kebutuhan, desain, ukuran, dan budget Anda. Bisa via WhatsApp, telepon, atau datang langsung.'
    },
    {
        number: 2,
        icon: 'fa-pencil-ruler',
        title: 'Desain & RAB',
        description: 'Kami buatkan sketsa desain lengkap dengan Rincian Anggaran Biaya. Revisi gratis sampai Anda setuju.'
    },
    {
        number: 3,
        icon: 'fa-tools',
        title: 'Produksi',
        description: 'Pengrajin kami mulai mengerjakan furnitur Anda dengan teliti. Setiap tahap melalui quality control.'
    },
    {
        number: 4,
        icon: 'fa-paint-roller',
        title: 'Finishing',
        description: 'Tahap akhir: penghalusan, pewarnaan, dan pelapisan. Hasil akhir yang halus, rapi, dan tahan lama.'
    },
    {
        number: 5,
        icon: 'fa-truck',
        title: 'Pengiriman',
        description: 'Furnitur siap dikirim dan dipasang di tempat Anda. Kami pastikan semuanya sempurna sebelum serah terima.'
    }
];

// ===== DATA GALERI =====
const galleryData = [
    { src: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80', caption: 'Proses pembuatan meja jati' },
    { src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80', caption: 'Interior ruang tamu dengan furnitur custom' },
    { src: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=800&q=80', caption: 'Detail ukiran kursi jati' },
    { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', caption: 'Workshop Dharma Saputra' },
    { src: 'https://images.unsplash.com/photo-1517705008128-361805f42e86?w=800&q=80', caption: 'Meja makan custom ukuran besar' },
    { src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80', caption: 'Set kursi kantor minimalis' }
];

// ===== DOM =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const capabilitiesGrid = document.getElementById('productsGrid');
const galleryGrid = document.getElementById('galleryGrid');
const materialsGrid = document.getElementById('materialsGrid');
const processSteps = document.getElementById('processSteps');
const productModal = document.getElementById('productModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const filterBtns = document.querySelectorAll('.filter-btn');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const consultationForm = document.getElementById('consultationForm');

const materialSelect = document.getElementById('formMaterial');

let currentFilter = 'all';
let currentLightboxIndex = 0;

// ===== NAVBAR =====
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
    updateActiveNav();
});

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('.section, .hero');
    let current = 'home';
    sections.forEach(section => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            current = section.id;
        }
    });
    navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
}

// ===== RENDER KEMAMPUAN =====
function renderCapabilities(filter = 'all') {
    const filtered = filter === 'all'
        ? capabilitiesData
        : capabilitiesData.filter(p => p.category === filter);

    capabilitiesGrid.innerHTML = filtered.map(item => `
        <div class="product-card tilt-card" data-id="${item.id}">
            <div class="product-card-image">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <span class="product-card-badge">100% CUSTOM</span>
            </div>
            <div class="product-card-body">
                <h4><i class="fas ${item.icon}"></i> ${item.name}</h4>
                <p>${item.description}</p>
                <div class="card-custom-options">
                    ${item.options.map(opt => `<span><i class="fas fa-check"></i> ${opt}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = parseInt(card.dataset.id);
            openCapabilityModal(id);
        });
    });
}

// ===== FILTER =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        renderCapabilities(currentFilter);
    });
});

// ===== MODAL KEMAMPUAN =====
function openCapabilityModal(id) {
    const item = capabilitiesData.find(p => p.id === id);
    if (!item) return;

    document.getElementById('modalImg').src = item.image;
    document.getElementById('modalImg').alt = item.name;
    document.getElementById('modalCategory').textContent = item.category;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalDesc').textContent = item.description;
    document.getElementById('modalOrderBtn').href = `#consultation`;

    const specsList = document.getElementById('modalSpecs');
    specsList.innerHTML = item.specs.map(s => `
        <li>${s.label} <span>${s.value}</span></li>
    `).join('');

    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeProductModal);
modalOverlay.addEventListener('click', closeProductModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeProductModal();
        closeLightbox();
    }
});

// ===== RENDER GALERI SLIDER =====
function renderGallery() {
    galleryGrid.innerHTML = `
        <div class="slider-container" id="sliderContainer">
            <div class="slider-track" id="sliderTrack">
                ${galleryData.map((item, index) => `
                    <div class="slider-slide" data-index="${index}">
                        <img src="${item.src}" alt="${item.caption}" loading="lazy">
                        <div class="slider-caption">${item.caption}</div>
                    </div>
                `).join('')}
            </div>
            <button class="slider-btn slider-prev" id="sliderPrev" aria-label="Sebelumnya">
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="slider-btn slider-next" id="sliderNext" aria-label="Selanjutnya">
                <i class="fas fa-chevron-right"></i>
            </button>
            <div class="slider-dots" id="sliderDots">
                ${galleryData.map((_, i) => `<span class="slider-dot${i === 0 ? ' active' : ''}" data-index="${i}"></span>`).join('')}
            </div>
        </div>
    `;

    initSlider();
}

// ===== SLIDER =====
let sliderIndex = 0;
let sliderTouchStartX = 0;
let sliderTouchEndX = 0;

function initSlider() {
    const track = document.getElementById('sliderTrack');
    const slides = document.querySelectorAll('.slider-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    if (!track || !slides.length) return;

    function goTo(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        sliderIndex = index;
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
    }

    prevBtn.addEventListener('click', () => goTo(sliderIndex - 1));
    nextBtn.addEventListener('click', () => goTo(sliderIndex + 1));
    dots.forEach(dot => dot.addEventListener('click', () => goTo(parseInt(dot.dataset.index))));

    // Touch swipe
    const container = document.getElementById('sliderContainer');
    container.addEventListener('touchstart', (e) => { sliderTouchStartX = e.changedTouches[0].screenX; }, { passive: true });
    container.addEventListener('touchend', (e) => {
        sliderTouchEndX = e.changedTouches[0].screenX;
        const diff = sliderTouchStartX - sliderTouchEndX;
        if (Math.abs(diff) > 50) {
            diff > 0 ? goTo(sliderIndex + 1) : goTo(sliderIndex - 1);
        }
    }, { passive: true });

    // Keyboard
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' && document.getElementById('sliderContainer')) goTo(sliderIndex + 1);
        if (e.key === 'ArrowLeft' && document.getElementById('sliderContainer')) goTo(sliderIndex - 1);
    });
}

// ===== LIGHTBOX =====
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function updateLightbox() {
    const item = galleryData[currentLightboxIndex];
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxCaption.textContent = item.caption;
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function nextLightbox() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryData.length;
    updateLightbox();
}

function prevLightbox() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryData.length) % galleryData.length;
    updateLightbox();
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxNext.addEventListener('click', nextLightbox);
lightboxPrev.addEventListener('click', prevLightbox);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'ArrowRight') nextLightbox();
    if (e.key === 'ArrowLeft') prevLightbox();
});

// ===== RENDER MATERIAL =====
function renderMaterials() {
    materialsGrid.innerHTML = materialsData.map(mat => `
        <div class="material-card tilt-card" data-material="${mat.id}">
            <div class="material-card-image">
                <img src="${mat.image}" alt="${mat.name}" loading="lazy">
                <div class="material-card-fade"></div>
            </div>
            <div class="material-card-body">
                <h4>${mat.name}</h4>
                <p class="material-latin">${mat.latin}</p>
                <div class="material-info-grid">
                    <div class="material-info-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${mat.origin}</span>
                    </div>
                    <div class="material-info-item">
                        <i class="fas fa-palette"></i>
                        <span>${mat.color}</span>
                    </div>
                </div>
                <p>${mat.description}</p>
                <div class="material-detail">
                    <strong><i class="fas fa-clipboard-list"></i> Karakteristik:</strong>
                    <span>${mat.characteristics}</span>
                </div>
                <div class="material-detail">
                    <strong><i class="fas fa-thumbs-up"></i> Terbaik untuk:</strong>
                    <span>${mat.bestFor}</span>
                </div>
                <div class="material-tags">
                    ${mat.tags.map(tag => `<span class="material-tag">${tag}</span>`).join('')}
                    <span class="material-tag durability">${mat.durability}</span>
                    <span class="material-tag price">${mat.priceLevel}</span>
                </div>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.material-card').forEach(card => {
        card.addEventListener('click', () => {
            document.querySelectorAll('.material-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            const matName = card.querySelector('h4').textContent;
            if (materialSelect) {
                const options = materialSelect.options;
                for (let i = 0; i < options.length; i++) {
                    if (options[i].text.toLowerCase().includes(matName.toLowerCase())) {
                        materialSelect.value = options[i].value;
                        break;
                    }
                }
            }
        });
    });
}

// ===== RENDER PROSES =====
function renderProcess() {
    processSteps.innerHTML = processStepsData.map(step => `
        <div class="process-step">
            <div class="process-step-icon">
                <i class="fas ${step.icon}"></i>
            </div>
            <div class="process-step-number">${step.number}</div>
            <div>
                <h4>${step.title}</h4>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');
}

// ===== DATA FAQ =====
const faqData = [
    {
        question: 'Berapa lama proses pembuatan furnitur custom?',
        answer: 'Estimasi pengerjaan tergantung jenis dan kompleksitas furnitur. Rata-rata 1-4 minggu. Kursi/rak kecil: 1-2 minggu. Meja/lemari: 2-4 minggu. Kitchen set: 3-6 minggu. Kami akan berikan timeline pasti setelah desain disepakati.'
    },
    {
        question: 'Apakah ada minimal pemesanan?',
        answer: 'Tidak ada! Anda bisa pesan 1 unit saja. Kami melayani pesanan satuan untuk kebutuhan rumah tangga maupun partai besar untuk proyek hotel, resto, atau kantor.'
    },
    {
        question: 'Bisakah saya request desain sendiri?',
        answer: 'Tentu! Anda bisa kirimkan referensi gambar (dari Pinterest, Instagram, atau foto). Tim desain kami akan bantu mewujudkannya dengan ukuran dan material yang tepat. Revisi desain GRATIS sampai Anda puas.'
    },
    {
        question: 'Bahan kayu apa yang paling bagus untuk furnitur?',
        answer: 'Jati adalah yang terbaik untuk ketahanan dan keindahan serat. Mahoni cocok untuk furnitur klasik elegan. Trembesi unik dengan serat eksotis. Multiplek praktis untuk lemari dan kitchen set. Pilihan tergantung kebutuhan, budget, dan selera Anda.'
    },
    {
        question: 'Apakah bisa minta sampel kayu sebelum pesan?',
        answer: 'Bisa! Kami sediakan sampel kayu dan finishing untuk Anda lihat dan pegang langsung. Silakan hubungi kami untuk atur jadwal datang ke workshop.'
    },
    {
        question: 'Berapa biaya pembuatan furnitur custom?',
        answer: 'Biaya tergantung: jenis furnitur, ukuran, material, finishing, dan kompleksitas desain. Kami berikan RAB (Rincian Anggaran Biaya) lengkap dan TRANSPARAN setelah desain disetujui. Tidak ada biaya tersembunyi.'
    },
    {
        question: 'Apakah termasuk jasa antar dan pasang?',
        answer: 'Ya, kami siap antar dan pasang di lokasi Anda (Jabodetabek dan sekitarnya). Untuk luar kota akan dihitung biaya pengiriman terpisah. Kami pastikan furnitur terpasang dengan sempurna.'
    },
    {
        question: 'Bagaimana cara merawat furnitur kayu agar awet?',
        answer: '1) Hindari sinar matahari langsung. 2) Lap dengan kain lembut, jangan pakai air berlebih. 3) Gunakan polish kayu khusus 3-6 bulan sekali. 4) Jangan letakkan barang panas langsung di permukaan kayu. 5) Untuk furnitur outdoor, lapisi ulang finishing setahun sekali.'
    }
];

// ===== RENDER FAQ =====
function renderFAQ() {
    const faqList = document.getElementById('faqList');
    faqList.innerHTML = faqData.map((item, index) => `
        <div class="faq-item">
            <button class="faq-question" data-index="${index}">
                <span>${item.question}</span>
                <i class="fas fa-chevron-down"></i>
            </button>
            <div class="faq-answer">
                <p>${item.answer}</p>
            </div>
        </div>
    `).join('');

    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const isActive = item.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// ===== FORM =====
consultationForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('formName').value.trim();
    const phone = document.getElementById('formPhone').value.trim();
    const type = document.getElementById('formType').value;
    const material = document.getElementById('formMaterial').value;
    const width = document.getElementById('formWidth').value;
    const height = document.getElementById('formHeight').value;
    const depth = document.getElementById('formDepth').value;
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !phone || !type) {
        alert('Mohon isi nama, nomor WhatsApp, dan jenis furnitur.');
        return;
    }

    let text = `Halo Dharma Saputra Mebel Custom,%0A%0A`;
    text += `Saya *${name}* ingin memesan furnitur custom.%0A%0A`;
    text += `📋 *Detail Pesanan:*%0A`;
    text += `- Jenis: ${type}%0A`;
    text += `- Material: ${material || 'Diskusi'}%0A`;
    if (width) text += `- Panjang: ${width} cm%0A`;
    if (height) text += `- Tinggi: ${height} cm%0A`;
    if (depth) text += `- Lebar: ${depth} cm%0A`;
    if (message) text += `%0A📝 *Catatan:*%0A${message}%0A%0A`;
    text += `%0ATerima kasih!`;

    const whatsappUrl = `https://wa.me/628886278896?text=${text}`;
    window.open(whatsappUrl, '_blank');
});

// ===== STATS COUNTER =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const increment = Math.ceil(target / 40);
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current >= target) {
                counter.textContent = target + '+';
                return;
            }
            counter.textContent = current;
            requestAnimationFrame(updateCounter);
        };
        updateCounter();
    });
}

// ===== SCROLL ANIMATIONS =====
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

// ===== GOLD PARTICLES =====
function initParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const container = document.createElement('div');
    container.className = 'particle-container';
    hero.appendChild(container);

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'gold-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDelay = (Math.random() * 8) + 's';
        particle.style.animationDuration = (6 + Math.random() * 6) + 's';
        container.appendChild(particle);
    }
}

// ===== PARALLAX HERO =====
function initParallax() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroContent = hero.querySelector('.hero-content');
        const heroBg = hero.querySelector('.hero-bg');
        if (heroContent && scrolled < hero.offsetHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.15}px)`;
            heroContent.style.opacity = 1 - scrolled / (hero.offsetHeight * 0.8);
        }
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrolled * -0.05}px)`;
        }
    });
}

// ===== CARD TILT 3D =====
function initCardTilt() {
    document.querySelectorAll('.tilt-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -6;
            const rotateY = ((x - centerX) / centerX) * 6;
            card.style.setProperty('--rotateX', rotateX + 'deg');
            card.style.setProperty('--rotateY', rotateY + 'deg');
        });
        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--rotateX', '0deg');
            card.style.setProperty('--rotateY', '0deg');
        });
    });
}

// ===== RIPPLE EFFECT =====
function initRipple() {
    document.querySelectorAll('.ripple-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
            ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ===== IMAGE LAZY LOAD BLUR =====
function initImageLazyLoad() {
    const imgs = document.querySelectorAll('.material-card-image img, .product-card-image img, .gallery-item img');
    imgs.forEach(img => {
        img.classList.add('img-blur');
        if (img.complete) {
            img.classList.remove('img-blur');
            img.classList.add('loaded');
        } else {
            img.addEventListener('load', () => {
                img.classList.remove('img-blur');
                img.classList.add('loaded');
            });
        }
    });
}

// ===== INTERACTIVE UI =====
function initProgressBar() {
    const bar = document.getElementById('progressBar');
    window.addEventListener('scroll', () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        bar.style.width = (winScroll / height) * 100 + '%';
    });
}

function initBackToTop() {
    const btn = document.getElementById('backToTop');
    const floatingSocial = document.getElementById('floatingSocial');
    window.addEventListener('scroll', () => {
        const show = window.scrollY > 400;
        btn.classList.toggle('visible', show);
        if (floatingSocial) floatingSocial.classList.toggle('visible', show);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initFloatingWA() {
}

function initStaggerAnimations() {
    const staggerTargets = [
        '.capabilities-grid',
        '.materials-grid',
        '.gallery-grid',
        '.about-values',
        '.consultation-info',
        '.contact-grid',
        '.process-steps'
    ];
    staggerTargets.forEach(sel => {
        const el = document.querySelector(sel);
        if (el) el.classList.add('stagger-children');
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.stagger-children').forEach(el => observer.observe(el));
}

function initSectionReveal() {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.05 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

// Add fade-in class to elements
function setupScrollAnimations() {
    const targets = document.querySelectorAll(
        '.about-grid, .capabilities-grid, .materials-grid, .process-steps, .faq-list, .gallery-grid, .consultation-wrapper, .contact-grid, .about-values, .hero-stats'
    );
    targets.forEach(el => el.classList.add('fade-in'));
}

// ===== PRELOADER =====
function hidePreloader() {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        setTimeout(() => preloader.classList.add('hidden'), 500);
    }
}

// ===== INIT =====
function init() {
    renderCapabilities();
    renderMaterials();
    renderProcess();
    renderFAQ();
    renderGallery();
    setupScrollAnimations();
    handleScrollAnimations();
    initProgressBar();
    initBackToTop();
    initFloatingWA();
    initParallax();
    initParticles();
    initCardTilt();
    initRipple();
    initImageLazyLoad();
    initStaggerAnimations();
    initSectionReveal();

    // Trigger counter animation when stats are visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounters();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) statsObserver.observe(heroStats);

    hidePreloader();
}

document.addEventListener('DOMContentLoaded', init);
