document.getElementById("downloadForm").addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent form refresh

    const urlInput = document.getElementById("urlInput").value;

    // Create a FormData object
    const formData = new FormData();
    formData.append("link", urlInput);

    try {
        // Send the POST request to the backend
        const response = await fetch("http://localhost:8000/download", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            // Create a blob from the response
            const blob = await response.blob();

            // Extract filename from Content-Disposition header
            let filename = "Save_Buster_Video.mp4";  // Fallback filename
            const contentDisposition = response.headers.get("Content-Disposition");
            if (contentDisposition) {
                const match = contentDisposition.match(/filename="(.+)"/);
                if (match) {
                    filename = match[1];
                }
            }

            // Create a link to download the file
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(blob);
            downloadLink.download = filename;  // Use server-provided filename
            document.body.appendChild(downloadLink);
            downloadLink.click();
            downloadLink.remove();

            alert("Download successful!");
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.error}`);
        }
    } catch (error) {
        alert(`An error occurred: ${error.message}`);
    }
});








window.addEventListener('resize', function(){
    addRequiredClass();
})


function addRequiredClass() {
    if (window.innerWidth < 860) {
        document.body.classList.add('mobile')
    } else {
        document.body.classList.remove('mobile') 
    }
}

window.onload = addRequiredClass

let hamburger = document.querySelector('.hamburger')
let mobileNav = document.querySelector('.nav-list')

let bars = document.querySelectorAll('.hamburger span')

let isActive = false

hamburger.addEventListener('click', function() {
    mobileNav.classList.toggle('open')
    if(!isActive) {
        bars[0].style.transform = 'rotate(45deg)'
        bars[1].style.opacity = '0'
        bars[2].style.transform = 'rotate(-45deg)'
        isActive = true
    } else {
        bars[0].style.transform = 'rotate(0deg)'
        bars[1].style.opacity = '1'
        bars[2].style.transform = 'rotate(0deg)'
        isActive = false
    }
    

})




// ============================================== //


// Define translations for each language
const translations = {
    en: {
        heading: "Youtube Video Downloader",
        subtitle: "Online & Free Youtube Video Downloader",
        description: "SAVE BUSTER is a free YouTube Video Downloader tool that allows you to convert and download Youtube Video with the Highest Quality. It's supported a range of video and audio formats like MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO etc. You can quickly and easily download video from Youtube in 360p, 720p, 1080p, and even 4K quality without installing software or applications. SAVE BUSTER works on both Android and Computer devices. It's a free, Fast, and secure Youtube Video Downloader. and simply save thousands of favorite videos from YouTube.",
        step1: "Step 1: Copy the Video Link",
        step2: "Step 2: Paste the URL",
        step3: "Step 3: Click the “Download” Button",
        step4: "Step 4: Download",
        footerNote: "© 2024 YouTube Downloader, made with ❤ by @SaiDivakar.",
        shortsDownloader: "YouTube Shorts Downloader",
        howToDownload: "How to Download?",
        advertiseWithUs: "Advertise With Us"
    },
    te: {
        heading: "యూట్యూబ్ వీడియో డౌన్లోడర్",
        subtitle: "ఆన్‌లైన్ & ఫ్రీ యూట్యూబ్ వీడియో డౌన్లోడర్",
        description: "సేవ్ బస్టర్ అనేది యూట్యూబ్ వీడియోని అత్యధిక నాణ్యతతో మార్చడానికి మరియు డౌన్‌లోడ్ చేయడానికి మిమ్మల్ని అనుమతించే ఉచిత YouTube వీడియో డౌన్‌లోడ్ సాధనం. ఇది MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO మొదలైన అనేక రకాల వీడియో మరియు ఆడియో ఫార్మాట్‌లకు మద్దతు ఇస్తుంది. మీరు సాఫ్ట్‌వేర్‌ను ఇన్‌స్టాల్ చేయకుండానే 360p, 720p, 1080p మరియు 4K నాణ్యతతో కూడా Youtube నుండి వీడియోను త్వరగా మరియు సులభంగా డౌన్‌లోడ్ చేసుకోవచ్చు. లేదా అప్లికేషన్లు. సేవ్ బస్టర్ ఆండ్రాయిడ్ మరియు కంప్యూటర్ పరికరాల్లో పని చేస్తుంది. ఇది ఉచిత, వేగవంతమైన మరియు సురక్షితమైన Youtube వీడియో డౌన్లోడర్. మరియు YouTube నుండి వేలాది ఇష్టమైన వీడియోలను సేవ్ చేయండి.",
        step1: "దశ 1: వీడియో లింక్ కాపీ చేయండి",
        step2: "దశ 2: URL ను పేస్ట్ చేయండి",
        step3: "దశ 3: “డౌన్లోడ్” బటన్ క్లిక్ చేయండి",
        step4: "దశ 4: డౌన్లోడ్",
        footerNote: "© 2024 యూట్యూబ్ డౌన్లోడర్, ❤తో చేసినది @SaiDivakar.",
        shortsDownloader: "యూట్యూబ్ షార్ట్స్ డౌన్లోడర్",
        howToDownload: "ఎలా డౌన్లోడ్ చేయాలి?",
        advertiseWithUs: "మనతో ప్రచారం చేయండి"
    },
    hi: {
        heading: "यूट्यूब वीडियो डाउनलोडर",
        subtitle: "ऑनलाइन और मुफ्त यूट्यूब वीडियो डाउनलोडर",
        description: "SAVE BUSTER एक मुफ्त यूट्यूब वीडियो डाउनलोडर उपकरण है जो आपको यूट्यूब वीडियो को उच्चतम गुणवत्ता में कनवर्ट और डाउनलोड करने की अनुमति देता है। यह MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO आदि जैसे कई वीडियो और ऑडियो प्रारूपों का समर्थन करता है। आप बिना किसी सॉफ़्टवेयर या ऐप्लिकेशन को इंस्टॉल किए यूट्यूब से 360p, 720p, 1080p और यहां तक कि 4K गुणवत्ता में वीडियो को जल्दी और आसानी से डाउनलोड कर सकते हैं। SAVE BUSTER एंड्रॉइड और कंप्यूटर उपकरणों पर काम करता है। यह एक मुफ्त, तेज और सुरक्षित यूट्यूब वीडियो डाउनलोडर है। और बस यूट्यूब से हजारों पसंदीदा वीडियो को सेव करें।",
        step1: "चरण 1: वीडियो लिंक कॉपी करें",
        step2: "चरण 2: URL पेस्ट करें",
        step3: "चरण 3: “डाउनलोड” बटन पर क्लिक करें",
        step4: "चरण 4: डाउनलोड करें",
        footerNote: "© 2024 YouTube Downloader, ❤ के साथ बनाया गया @SaiDivakar द्वारा।",
        shortsDownloader: "यूट्यूब शॉर्ट्स डाउनलोडर",
        howToDownload: "कैसे डाउनलोड करें?",
        advertiseWithUs: "हमारे साथ विज्ञापन करें"
    },    
    ta: {
        heading: "யூடியூப் வீடியோ டவுன்லோடர்",
        subtitle: "ஆன்லைன் மற்றும் இலவச யூடியூப் வீடியோ டவுன்லோடர்",
        description: "SAVE BUSTER என்பது உங்களுக்கு யூடியூப் வீடியோக்களை மிக உயர்ந்த தரத்தில் மாற்றவும், டவுன்லோட் செய்யவும் அனுமதிக்கும் ஒரு இலவச யூடியூப் வீடியோ டவுன்லோடர் கருவி. இது MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO போன்ற பல்வேறு வீடியோ மற்றும் ஆடியோ வடிவங்களை ஆதரிக்கிறது. நீங்கள் எந்த மென்பொருளையும் அல்லது பயன்பாடுகளையும் நிறுவாமல் 360p, 720p, 1080p மற்றும் 4K தரத்தில் யூடியூப் வீடியோக்களை விரைவாகவும் எளிதாகவும் டவுன்லோட் செய்யலாம். SAVE BUSTER ஆன்ட்ராய்டு மற்றும் கணினி சாதனங்களில் செயல்படுகிறது. இது இலவசம், வேகமாக மற்றும் பாதுகாப்பான யூடியூப் வீடியோ டவுன்லோடர். மேலும் யூடியூபில் இருந்து ஆயிரக்கணக்கான பிரியமான வீடியோக்களை எளிதாக சேமிக்கலாம்.",
        step1: "எடுத்துக்கூறு 1: வீடியோ இணைப்பை நகலெடுக்கவும்",
        step2: "எடுத்துக்கூறு 2: URL ஒட்டவும்",
        step3: "எடுத்துக்கூறு 3: “டவுன்லோட்” பொத்தானை கிளிக் செய்யவும்",
        step4: "எடுத்துக்கூறு 4: டவுன்லோட் செய்யவும்",
        footerNote: "© 2024 YouTube Downloader, ❤ உடன் உருவாக்கப்பட்டது @SaiDivakar.",
        shortsDownloader: "யூடியூப் ஷார்ட்ஸ் டவுன்லோடர்",
        howToDownload: "எப்படி டவுன்லோட் செய்வது?",
        advertiseWithUs: "எங்களுடன் விளம்பரம் செய்யவும்"
    },
    bn: {
        heading: "ইউটিউব ভিডিও ডাউনলোডার",
        subtitle: "অনলাইন এবং বিনামূল্যে ইউটিউব ভিডিও ডাউনলোডার",
        description: "SAVE BUSTER একটি বিনামূল্যের ইউটিউব ভিডিও ডাউনলোডার টুল যা আপনাকে উচ্চ মানের ভিডিও ডাউনলোড এবং কনভার্ট করতে সাহায্য করে। এটি MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO ইত্যাদি বিভিন্ন ফরম্যাট সমর্থন করে। সফটওয়্যার বা অ্যাপ্লিকেশন ইনস্টল না করেই আপনি সহজেই এবং দ্রুত ইউটিউব থেকে 360p, 720p, 1080p এবং এমনকি 4K মানের ভিডিও ডাউনলোড করতে পারেন। SAVE BUSTER অ্যান্ড্রয়েড এবং কম্পিউটার উভয় ডিভাইসে কাজ করে। এটি একটি বিনামূল্যে, দ্রুত এবং নিরাপদ ইউটিউব ভিডিও ডাউনলোডার। এবং ইউটিউব থেকে হাজার হাজার প্রিয় ভিডিও সংরক্ষণ করুন।",
        step1: "ধাপ ১: ভিডিও লিঙ্ক কপি করুন",
        step2: "ধাপ ২: URL পেস্ট করুন",
        step3: "ধাপ ৩: “ডাউনলোড” বাটন ক্লিক করুন",
        step4: "ধাপ ৪: ডাউনলোড করুন",
        footerNote: "© 2024 ইউটিউব ডাউনলোডার, ❤ দিয়ে তৈরি @SaiDivakar।",
        shortsDownloader: "ইউটিউব শর্টস ডাউনলোডার",
        howToDownload: "কীভাবে ডাউনলোড করবেন?",
        advertiseWithUs: "আমাদের সাথে বিজ্ঞাপন দিন"
    },        
    es: {
        heading: "Descargador de Videos de YouTube",
        subtitle: "Descargador de Videos de YouTube en Línea y Gratuito",
        description: "SAVE BUSTER es una herramienta gratuita para descargar videos de YouTube que te permite convertir y descargar videos de YouTube con la más alta calidad. Soporta una variedad de formatos de video y audio como MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO, etc. Puedes descargar rápidamente y fácilmente videos de YouTube en calidad 360p, 720p, 1080p e incluso 4K sin instalar software o aplicaciones. SAVE BUSTER funciona tanto en dispositivos Android como en computadoras. Es un descargador de videos de YouTube gratuito, rápido y seguro. Y simplemente guarda miles de videos favoritos de YouTube.",
        step1: "Paso 1: Copia el Enlace del Video",
        step2: "Paso 2: Pega la URL",
        step3: "Paso 3: Haz clic en el botón “Descargar”",
        step4: "Paso 4: Descargar",
        footerNote: "© 2024 YouTube Downloader, hecho con ❤ por @SaiDivakar.",
        shortsDownloader: "Descargador de YouTube Shorts",
        howToDownload: "¿Cómo Descargar?",
        advertiseWithUs: "Publicita Con Nosotros"
    },
    fr: {
        heading: "Téléchargeur de Vidéos YouTube",
        subtitle: "Téléchargeur de Vidéos YouTube Gratuit et En Ligne",
        description: "SAVE BUSTER est un outil gratuit de téléchargement de vidéos YouTube qui vous permet de convertir et de télécharger des vidéos YouTube en haute qualité. Il prend en charge une gamme de formats vidéo et audio tels que MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO, etc. Vous pouvez rapidement et facilement télécharger des vidéos de YouTube en qualité 360p, 720p, 1080p et même en 4K sans installer de logiciels ni d'applications. SAVE BUSTER fonctionne sur les appareils Android et les ordinateurs. C'est un téléchargeur de vidéos YouTube gratuit, rapide et sécurisé. Et enregistrez simplement des milliers de vidéos YouTube préférées.",
        step1: "Étape 1 : Copiez le lien de la vidéo",
        step2: "Étape 2 : Collez l'URL",
        step3: "Étape 3 : Cliquez sur le bouton “Télécharger”",
        step4: "Étape 4 : Télécharger",
        footerNote: "© 2024 YouTube Downloader, créé avec ❤ par @SaiDivakar.",
        shortsDownloader: "Téléchargeur YouTube Shorts",
        howToDownload: "Comment Télécharger ?",
        advertiseWithUs: "Faites de la Publicité avec Nous"
    },
    de: {
        heading: "YouTube Video Downloader",
        subtitle: "Kostenloser Online YouTube Video Downloader",
        description: "SAVE BUSTER ist ein kostenloses YouTube-Video-Downloader-Tool, mit dem Sie YouTube-Videos in höchster Qualität konvertieren und herunterladen können. Es unterstützt eine Reihe von Video- und Audioformaten wie MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO usw. Sie können schnell und einfach Videos von YouTube in 360p, 720p, 1080p und sogar 4K-Qualität herunterladen, ohne Software oder Anwendungen zu installieren. SAVE BUSTER funktioniert sowohl auf Android- als auch auf Computergeräten. Es ist ein kostenloser, schneller und sicherer YouTube-Video-Downloader. Und speichern Sie einfach Tausende von Lieblingsvideos von YouTube.",
        step1: "Schritt 1: Kopieren Sie den Video-Link",
        step2: "Schritt 2: Fügen Sie die URL ein",
        step3: "Schritt 3: Klicken Sie auf die Schaltfläche “Download”",
        step4: "Schritt 4: Herunterladen",
        footerNote: "© 2024 YouTube Downloader, erstellt mit ❤ von @SaiDivakar.",
        shortsDownloader: "YouTube Shorts Downloader",
        howToDownload: "Wie man herunterlädt?",
        advertiseWithUs: "Werben Sie mit uns"
    },
    zh: {
        heading: "YouTube视频下载器",
        subtitle: "在线免费YouTube视频下载器",
        description: "SAVE BUSTER 是一款免费的 YouTube 视频下载工具，可让您以最高质量转换并下载 YouTube 视频。支持多种视频和音频格式，例如 MP4、MP3、WEBM、WMV、3GP、M4V、FLV、MO 等。您可以快速轻松地以 360p、720p、1080p 甚至 4K 的质量下载 YouTube 视频，无需安装任何软件或应用程序。SAVE BUSTER 适用于 Android 设备和电脑。这是一款免费、快速、安全的 YouTube 视频下载器。轻松保存数千个您喜欢的 YouTube 视频。",
        step1: "步骤 1: 复制视频链接",
        step2: "步骤 2: 粘贴网址",
        step3: "步骤 3: 点击“下载”按钮",
        step4: "步骤 4: 下载",
        footerNote: "© 2024 YouTube 下载器，由 @SaiDivakar ❤ 制作。",
        shortsDownloader: "YouTube Shorts 下载器",
        howToDownload: "如何下载？",
        advertiseWithUs: "与我们合作广告"
    },    
    it: {
        heading: "Downloader di Video YouTube",
        subtitle: "Downloader di Video YouTube Online e Gratuito",
        description: "SAVE BUSTER è uno strumento gratuito per il download di video YouTube che ti permette di convertire e scaricare video YouTube con la massima qualità. Supporta una gamma di formati video e audio come MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO, ecc. Puoi scaricare rapidamente e facilmente video da YouTube in qualità 360p, 720p, 1080p e anche 4K senza installare software o applicazioni. SAVE BUSTER funziona su dispositivi Android e computer. È un downloader gratuito, veloce e sicuro per video YouTube. E salva semplicemente migliaia di video preferiti da YouTube.",
        step1: "Passaggio 1: Copia il link del video",
        step2: "Passaggio 2: Incolla l'URL",
        step3: "Passaggio 3: Clicca sul pulsante “Download”",
        step4: "Passaggio 4: Scarica",
        footerNote: "© 2024 YouTube Downloader, fatto con ❤ da @SaiDivakar.",
        shortsDownloader: "YouTube Shorts Downloader",
        howToDownload: "Come scaricare?",
        advertiseWithUs: "Fai pubblicità con noi"
    },
    ru: {
        heading: "Загрузчик видео с YouTube",
        subtitle: "Онлайн и бесплатный загрузчик видео с YouTube",
        description: "SAVE BUSTER — это бесплатный инструмент для загрузки видео с YouTube, который позволяет конвертировать и загружать видео с YouTube в самом высоком качестве. Поддерживаются различные форматы видео и аудио, такие как MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO и другие. Вы можете быстро и легко скачать видео с YouTube в качестве 360p, 720p, 1080p и даже 4K без установки программного обеспечения или приложений. SAVE BUSTER работает на устройствах Android и компьютерах. Это бесплатный, быстрый и безопасный загрузчик видео с YouTube. И просто сохраните тысячи ваших любимых видео с YouTube.",
        step1: "Шаг 1: Скопируйте ссылку на видео",
        step2: "Шаг 2: Вставьте URL",
        step3: "Шаг 3: Нажмите кнопку «Скачать»",
        step4: "Шаг 4: Загрузите",
        footerNote: "© 2024 YouTube Downloader, сделано с ❤ @SaiDivakar.",
        shortsDownloader: "Загрузчик YouTube Shorts",
        howToDownload: "Как скачать?",
        advertiseWithUs: "Рекламируйте с нами"
    },
    ja: {
        heading: "YouTube動画ダウンローダー",
        subtitle: "オンライン＆無料のYouTube動画ダウンローダー",
        description: "SAVE BUSTERは、最高品質でYouTube動画を変換およびダウンロードできる無料のツールです。MP4、MP3、WEBM、WMV、3GP、M4V、FLV、MOなどのさまざまな動画およびオーディオ形式に対応しています。ソフトウェアやアプリケーションをインストールすることなく、360p、720p、1080p、さらには4K品質でYouTubeから動画を迅速かつ簡単にダウンロードできます。SAVE BUSTERは、Androidデバイスとコンピュータの両方で動作します。これは無料で、高速で安全なYouTube動画ダウンローダーです。そして、YouTubeからお気に入りの動画を数千本簡単に保存できます。",
        step1: "ステップ1: 動画リンクをコピー",
        step2: "ステップ2: URLを貼り付け",
        step3: "ステップ3: 「ダウンロード」ボタンをクリック",
        step4: "ステップ4: ダウンロード",
        footerNote: "© 2024 YouTube Downloader, ❤で作成 @SaiDivakar.",
        shortsDownloader: "YouTube Shorts ダウンローダー",
        howToDownload: "ダウンロード方法は？",
        advertiseWithUs: "広告について"
    },
    ko: {
        heading: "유튜브 비디오 다운로더",
        subtitle: "온라인 및 무료 유튜브 비디오 다운로더",
        description: "SAVE BUSTER는 고품질로 유튜브 비디오를 변환하고 다운로드할 수 있는 무료 유튜브 비디오 다운로더 도구입니다. MP4, MP3, WEBM, WMV, 3GP, M4V, FLV, MO 등 다양한 비디오 및 오디오 형식을 지원합니다. 소프트웨어나 애플리케이션을 설치하지 않고도 360p, 720p, 1080p, 심지어 4K 품질로 유튜브에서 비디오를 빠르고 쉽게 다운로드할 수 있습니다. SAVE BUSTER는 Android 및 컴퓨터 기기에서 작동합니다. 무료, 빠르고 안전한 유튜브 비디오 다운로더입니다. 유튜브에서 좋아하는 수천 개의 비디오를 간단히 저장하세요.",
        step1: "1단계: 비디오 링크 복사",
        step2: "2단계: URL 붙여넣기",
        step3: "3단계: '다운로드' 버튼 클릭",
        step4: "4단계: 다운로드",
        footerNote: "© 2024 유튜브 다운로더, ❤로 제작됨 @SaiDivakar.",
        shortsDownloader: "유튜브 쇼츠 다운로더",
        howToDownload: "다운로드 방법",
        advertiseWithUs: "광고 문의"
    },
    ar: {
        heading: "مُحمّل فيديوهات يوتيوب",
        subtitle: "مُحمّل فيديوهات يوتيوب مجاني وعبر الإنترنت",
        description: "SAVE BUSTER هو أداة مجانية لتحميل فيديوهات يوتيوب تتيح لك تحويل وتنزيل فيديوهات يوتيوب بأعلى جودة. يدعم مجموعة متنوعة من صيغ الفيديو والصوت مثل MP4، MP3، WEBM، WMV، 3GP، M4V، FLV، MO وغيرها. يمكنك بسهولة وسرعة تنزيل الفيديوهات من يوتيوب بجودة 360p، 720p، 1080p وحتى 4K بدون الحاجة لتثبيت برامج أو تطبيقات. يعمل SAVE BUSTER على أجهزة الأندرويد والكمبيوتر. إنه مُحمّل فيديوهات يوتيوب مجاني وسريع وآمن. فقط قم بحفظ آلاف الفيديوهات المفضلة من يوتيوب بسهولة.",
        step1: "الخطوة 1: انسخ رابط الفيديو",
        step2: "الخطوة 2: الصق الرابط",
        step3: "الخطوة 3: انقر على زر “تنزيل”",
        step4: "الخطوة 4: قم بالتنزيل",
        footerNote: "© 2024 مُحمّل يوتيوب، تم صنعه بحب ❤ من @SaiDivakar.",
        shortsDownloader: "مُحمّل يوتيوب شورتس",
        howToDownload: "كيف يتم التنزيل؟",
        advertiseWithUs: "أعلن معنا"
    },                

};


// Function to update content based on the selected language
function updateContent(language) {
    const content = translations[language];

    if (content) {
        document.querySelector("h1").textContent = content.heading;
        document.querySelector(".container2 h1").textContent = content.subtitle;
        document.querySelector(".container2 p").textContent = content.description;

        const steps = document.querySelectorAll(".step .text h2");
        steps[0].textContent = content.step1;
        steps[1].textContent = content.step2;
        steps[2].textContent = content.step3;
        steps[3].textContent = content.step4;

        document.querySelector(".footer-note").textContent = content.footerNote;

        // Update new strings for "YouTube Shorts Downloader", "How to Download?", "Advertise With Us"
        document.querySelector("#shortsDownloader").textContent = content.shortsDownloader;
        document.querySelector("#howToDownload").textContent = content.howToDownload;
        document.querySelector("#advertiseWithUs").textContent = content.advertiseWithUs;
    }
}

// Event listener for the dropdown menu
const languageDropdown = document.getElementById("language-button");
const dropdownContent = document.querySelector(".dropdown-content");

// Handle language selection
dropdownContent.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
        const selectedLanguage = event.target.dataset.lang;
        updateContent(selectedLanguage);

        // Update dropdown button text to the selected language
        languageDropdown.textContent = event.target.textContent;
    }
});