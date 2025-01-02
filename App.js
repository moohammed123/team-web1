
import './App.css';
import '../src/one.jpeg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Use Routes instead of Switch
import Navoo from './Components/Navoo';
import Helloo from './Components/Helloo';
import Toopics from './Components/Toopics';
import Startoo from './Components/Startoo';
import Podcast from './Components/Podcast';
import Disease from './Components/Disease';

function App() {
  const navigationItems = [
    { title: "الرئيسية", icon: "fas fa-home", link: "/" },
    { title: "الأمراض النفسية", icon: "fas fa-brain", link: "/Disease" },
    { title: "الأنماط الفكرية", icon: "fas fa-stream", link: "/patterns" },
    { title: "الاضطرابات النفسية", icon: "fas fa-user-md", link: "/disorders1" },
    { title: "البودكاستات", icon: "fas fa-podcast", link: "/Startoo" },
  ];
  
  const title = "مرحبًا بك في نَفْس";
  const description = `منصة تهدف إلى نشر الوعي حول الصحة النفسية والضغوطات التي تواجهنا في حياتنا اليومية، 
  ودعمًا معرفيًا يمكّنك من العناية بصحتك النفسية وتحقيق التوازن الداخلي في عالم مليء بالتحديات.`;
  const imageUrl = "https://i.pinimg.com/736x/35/33/4d/35334dde0e2455c3a2ecf64616c4b29e.jpg";
  const imageAlt = "صورة تعبيرية للصحة النفسية";
  const topics = [
    {
      title: "الأمراض النفسية",
      description: "تعرف على أكثر الأمراض النفسية شيوعًا مثل الاكتئاب والقلق وأحدث طرق العلاج.",
      imageUrl: "https://i.pinimg.com/736x/6b/d5/84/6bd58447976cf7e39c5caab77146e924.jpg",
      imageAlt: "الأمراض النفسية",
      link: "disorders.html",
      buttonText: "المزيد",
    },
    {
      title: "الأنماط الفكرية",
      description: "فهم الأنماط الفكرية الإيجابية والسلبية وكيفية تحسين تفكيرك.",
      imageUrl: "https://i.pinimg.com/736x/06/f2/3b/06f23ba8d600723e6c8faf075a96d99c.jpg",
      imageAlt: "الأنماط الفكرية",
      link: "patterns.html",
      buttonText: "المزيد",
    },
    {
      title: "الاضطرابات النفسية",
      description: "استكشف الأنواع المختلفة من الاضطرابات النفسية مثل الفصام، الاضطراب الثنائي القطب.",
      imageUrl: "https://i.pinimg.com/736x/35/98/1a/35981a1526e88473a0d4d65be5cf6013.jpg",
      imageAlt: "الاضطرابات النفسية",
      link: "disorders1.html",
      buttonText: "المزيد",
    },
    {
      title: "البودكاستات",
      description: "استمع إلى حلقات فريدة تغطي مواضيع الصحة النفسية، التنمية الذاتية، والمزيد.",
      imageUrl: "https://i.pinimg.com/736x/4b/1a/ae/4b1aae66eb3046a54e9eb44c2eb4c6a4.jpg",
      imageAlt: "البودكاستات",
      link: "podcasts.html",
      buttonText: "المزيد",
    },
  ];
  const callToAction = {
    title: "ابدأ رحلتك الآن",
    description: "اكتشف المزيد من المصادر والأدوات التي تدعم صحتك النفسية.",
    link: "contact.html",
    buttonText: "تواصل معنا",
  };
  const footerText = "© 2024 جميع الحقوق محفوظة لمنصة نَفْس";
  const podcastsData = [
    {
      image: "https://i.pinimg.com/736x/42/88/0d/42880d8a91dcfb5d34fbb5d80bb8e623.jpg",
      title: "كيف تحافظ على صحتك النفسية",
      description: "نصائح وخبرات تساعدك على التغلب على التوتر والقلق.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/c9/b1/13/c9b113e73df1854686203d7ead50834a.jpg",
      title: "تطوير الذات في بيئة العمل",
      description: "طرق لتعزيز الإنتاجية والتعامل مع الضغوط اليومية.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/cf/3a/d2/cf3ad2a348fa509f9dabb28a17fc8df0.jpg",
      title: "أساسيات العناية بالصحة النفسية",
      description: "خطوات بسيطة لتحسين حالتك المزاجية وتقليل التوتر.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/15/68/3f/15683fcccee1a8d5050ee850978b3316.jpg",
      title: "العلاقات الاجتماعية والصحة النفسية",
      description: "دور العلاقات الجيدة في تحسين صحتك النفسية.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/1f/77/70/1f77705c01583da27eb70b68262a6d3d.jpg",
      title: "النوم الصحي وأثره على الصحة النفسية",
      description: "كيفية تحسين جودة نومك لدعم صحتك النفسية.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/f8/83/ac/f883ac20ed84f7181c12a6e6d6afcf5d.jpg",
      title: "أهمية الحديث عن مشاعرك",
      description: "كيف يساعدك التعبير عن مشاعرك في تحسين صحتك النفسية.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/16/f0/20/16f020513cc5d3a5894e89c465d8df06.jpg",
      title: "التغذية وتأثيرها على الصحة النفسية",
      description: "الأطعمة التي تساعد في تعزيز حالتك المزاجية.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/e3/68/d0/e368d0395259f4e0909d9359fe4beb4f.jpg",
      title: "كيفية التعامل مع الضغط النفسي في العمل",
      description: "استراتيجيات فعالة للتعامل مع الضغوط اليومية.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/236x/c6/fe/9c/c6fe9c44fbf1cfc20a337c04902f0cd2.jpg",
      title: "التعامل مع القلق في الحياة اليومية",
      description: "طرق عملية للتغلب على القلق وتحقيق التوازن.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/236x/d7/e5/a3/d7e5a35852e0c7c5a7be0db460168be2.jpg",
      title: "التأمل وأثره على الصحة النفسية",
      description: "كيف يمكن للتأمل أن يقلل من التوتر ويعزز الهدوء الداخلي.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/2b/9f/a6/2b9fa64fc754c7d8ba976a24a0a3c529.jpg",
      title: "أسرار التفكير الإيجابي",
      description: "اكتشف كيف يؤثر التفكير الإيجابي على حياتك.",
      link: "video.html?video=video2.mp4"
    },
    {
      image: "https://i.pinimg.com/736x/19/80/8e/19808e20f92245e6b3dd9c7ecb6a1496.jpg",
      title: "راحة القلب",
      description: "كيف يمكن للنوم الجيد تحسين صحتك النفسية.",
      link: "video.html?video=video2.mp4"
    }
  ];
  
  const headerContent = {
    logoUrl: "logo3.png",
    logoAlt: "شعار نَفْس",
    tagline: "نافذتك لفهم النفس والعقل"
};

const mainSection = {
    title: "الأمراض النفسية",
    description: "تعرف على أكثر الأمراض النفسية شيوعًا، أسبابها، وكيفية التعامل معها من خلال حلقات متخصصة.",
    paragraph: "في هذا القسم، سنتعرف على أنواع الأمراض النفسية المختلفة، بما في ذلك الاكتئاب، القلق، والاضطرابات المزاجية."
};

const featuredEpisodes = {
    title: "بعض الامراض",
    episodes: [
      {
          imageUrl: "https://i.pinimg.com/736x/f5/08/75/f50875fcca6176859dca68e75d2e7339.jpg",
          altText: "حلقة عن اضطرابات المزاج",
          title: "فهم اضطرابات المزاج",
          description: "معلومات حول أنواع اضطرابات المزاج وأثرها على الحياة اليومية.",
          link: "/episode1",
          buttonText: "المزيد"
      },
      {
          imageUrl: "https://i.pinimg.com/736x/cf/3a/d2/cf3ad2a348fa509f9dabb28a17fc8df0.jpg",
          altText: "حلقة عن اضطرابات النوم",
          title: "اضطرابات النوم والصحة النفسية",
          description: "تعرف على العلاقة بين النوم الجيد والحالة النفسية المستقرة.",
          link: "/episode2",
          buttonText: "المزيد"
      },
      {
          imageUrl: "https://i.pinimg.com/736x/15/68/3f/15683fcccee1a8d5050ee850978b3316.jpg",
          altText: "حلقة عن الاكتئاب",
          title: "فهم الاكتئاب وأسبابه",
          description: "مناقشة شاملة حول أعراض الاكتئاب، أسبابه، وطرق العلاج الحديثة.",
          link: "/episode3",
          buttonText: "المزيد"
      },
      {
          imageUrl: "https://i.pinimg.com/736x/98/72/25/987225ca256713ea0144a5b9a87d5db0.jpg",
          altText: "حلقة عن العلاج النفسي",
          title: "أهمية العلاج النفسي",
          description: "كيف يمكن للعلاج النفسي مساعدتك على التغلب على التحديات النفسية.",
          link: "/episode4",
          buttonText: "المزيد"
      },
      {
          imageUrl: "https://i.pinimg.com/736x/08/3f/e7/083fe7f1c3cda41dafa06ffb5be3e36b.jpg",
          altText: "حلقة عن القلق",
          title: "القلق: صديق أم عدو؟",
          description: "كيفية التعامل مع القلق وأثره على جودة حياتك اليومية.",
          link: "/episode5",
          buttonText: "المزيد"
      },
      {
          imageUrl: "https://i.pinimg.com/736x/f5/08/75/f50875fcca6176859dca68e75d2e7339.jpg",
          altText: "حلقة عن اضطرابات المزاج",
          title: "فهم اضطرابات المزاج",
          description: "معلومات حول أنواع اضطرابات المزاج وأثرها على الحياة اليومية.",
          link: "/episode6",
          buttonText: "المزيد"
      },
      {
          imageUrl: "https://i.pinimg.com/736x/f5/08/75/f50875fcca6176859dca68e75d2e7339.jpg",
          altText: "حلقة عن الاضطرابات النفسية",
          title: "فهم الاضطرابات النفسية",
          description: "شرح شامل حول الأنواع المختلفة للاضطرابات النفسية وتأثيراتها.",
          link: "/episode7",
          buttonText: "المزيد"
      },
      {
          imageUrl: "https://i.pinimg.com/736x/cf/3a/d2/cf3ad2a348fa509f9dabb28a17fc8df0.jpg",
          altText: "حلقة عن الصحة النفسية",
          title: "أهمية الصحة النفسية",
          description: "كيف تؤثر الصحة النفسية على جودة الحياة اليومية.",
          link: "/episode8",
          buttonText: "المزيد"
      }
  ]
};

  return (
    <Router>
      <div className="App">
        <Routes> {/* Replace Switch with Routes */}
          <Route path="/startoo" element={  // Use `element` prop for rendering components
            <Startoo
              podcasts={podcastsData}
              footerText="© 2024 جميع الحقوق محفوظة لمنصة نَفْس"
              subscribeText="اشترك الآن لتصلك أحدث الحلقات"
              buttonText="اشترك"
            />
          } />
          
          <Route path="/Disease" element={  // Use `element` prop for rendering components
             <Disease
             navigationItems={navigationItems}
             headerContent={headerContent}
             mainSection={mainSection}
             featuredEpisodes={featuredEpisodes}
             footerText={footerText}
         />
          } />
          <Route path="/Podcast" element={  // Use `element` prop for rendering components
             <Podcast
             logoUrl="{one}"
             headerText="نافذتك لفهم النفس والعقل"
             footerText="© 2024 جميع الحقوق محفوظة لمنصة نَفْس"
             videoUrl="https://www.youtube.com/embed/-i1uF3pa0oI"
             navItems={navigationItems}
           />
          } />

          <Route path="/" element={  // Use `element` prop for rendering components
            <>
              <Navoo
                logoAlt="شعار نَفْس"
                headerText="نافذتك لفهم النفس والعقل"
                navigationItems={navigationItems}
              />
              <Helloo
                title="مرحبًا بك في نَفْس"
                description="منصة تهدف إلى نشر الوعي حول الصحة النفسية..."
                imageUrl="https://i.pinimg.com/736x/35/33/4d/35334dde0e2455c3a2ecf64616c4b29e.jpg"
                imageAlt="صورة تعبيرية للصحة النفسية"
              />
              <Toopics
                topics={topics}
                callToAction={{ title: "ابدأ رحلتك الآن", description: "اكتشف المزيد من المصادر..." ,buttonText: "تواصل معنا" }}
                footerText="© 2024 جميع الحقوق محفوظة لمنصة نَفْس"
              />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
