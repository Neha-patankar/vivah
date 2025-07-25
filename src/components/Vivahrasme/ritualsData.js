

// ritualsData.js
import { 
  Calendar, 
  Star, 
  Flower, 
  Heart, 
  Users, 
  Sun, 
  Music, 
  Clock, 
  Home, 
  Book, 
  Handshake, 
  Gift, 
  Camera, 
  Globe, 
  MapPin, 
  Smile 
} from 'lucide-react';

export const rituals = [
  {
    id: 1,
    name: "रोका समारोह",
    category: "Pre-Wedding",
    description: "विवाह की आधिकारिक घोषणा और परिवारों की सहमति।",
    icon: Calendar,
    color: "from-blue-500 to-blue-700",
    image: "/rasmeimage/rokaCeremony.png",
    link: "/ritual/roka"
  },
  {
    id: 2,
    name: "गणेश पूजा",
    category: "Pre-Wedding",
    description: "विवाह के मंगल आरम्भ हेतु भगवान गणेश की पूजा।",
    icon: Star,
    color: "from-orange-500 to-red-600",
    image: "/rasmeimage/ganeshpooja.png",
    link: "/ritual/ganesh-puja"
  },
  {
    id: 3,
    name: "माता पूजा",
    category: "Pre-Wedding",
    description: "विवाह के लिए देवी मां का आशीर्वाद प्राप्त करना।",
    icon: Flower,
    color: "from-pink-500 to-purple-700",
    image: "/rasmeimage/matapooja.png",
    link: "/ritual/mata-puja"
  },
  {
    id: 4,
    name: "तिलक",
    category: "Wedding",
    description: "दूल्हे को सम्मानित करने हेतु कन्या पक्ष द्वारा तिलक गया संस्कार।",
    icon: Heart,
    color: "from-red-500 to-orange-600",
    image: "/rasmeimage/titalk.png",
    link: "/ritual/tilak"
  },
  {
    id: 5,
    name: "हल्दी",
    category: "Wedding",
    description: "दूल्हा-दुल्हन को सुंदरता और सुंदरता हेतु हल्दी लगाई जाती है।",
    icon: Users,
    color: "from-yellow-500 to-green-600",
    image: "/rasmeimage/haldi.png",
    link: "/ritual/haldi"
  },
  {
    id: 6,
    name: "मेहंदी",
    category: "Wedding",
    description: "दुल्हन व अन्य महिलाओं के हाथों पर मेहंदी लगाई जाती है।",
    icon: Sun,
    color: "from-green-500 to-yellow-600",
    image: "/rasmeimage/mehnadi.png",
    link: "/ritual/mehendi"
  },
  {
    id: 7,
    name: "संगीत",
    category: "Wedding",
    description: "विवाह से पूर्व गीत-संगीत और नृत्य का आयोजन।",
    icon: Music,
    color: "from-purple-500 to-indigo-700",
    image: "/rasmeimage/sangit.png",
    link: "/ritual/sangeet"
  },
  {
    id: 8,
    name: "बारात",
    category: "Wedding",
    description: "दूल्हे और बारातियों का विवाह स्थल तक जुलूस।",
    icon: Clock,
    color: "from-indigo-500 to-blue-700",
    image: "/rasmeimage/barat.png",
    link: "/ritual/baraat"
  },
  {
    id: 9,
    name: "मंडप व्यवस्था",
    category: "Wedding",
    description: "विवाह संस्कार हेतु मंडप की सुंदर सजावट।",
    icon: Home,
    color: "from-orange-500 to-red-600",
    image: "/rasmeimage/mandap.png",
    link: "/ritual/mandap"
  },
  {
    id: 10,
    name: "वरमाला",
    category: "Wedding",
    description: "दूल्हा-दुल्हन द्वारा एक-दूसरे को फूलों की माला पहनाना।",
    icon: Book,
    color: "from-red-500 to-pink-600",
    image: "/rasmeimage/vermala.png",
    link: "/ritual/varmala"
  },
  {
    id: 11,
    name: "कन्यादान",
    category: "Wedding",
    description: "पिता द्वारा कन्या को वर को सौंपने का संस्कार।",
    icon: Handshake,
    color: "from-orange-500 to-yellow-600",
    image: "/rasmeimage/kanyadan.png",
    link: "/ritual/kanyadaan"
  },
  {
    id: 12,
    name: "फेरे",
    category: "Wedding",
    description: "अग्नि के चारों ओर सात फेरे और सात वचन।",
    icon: Gift,
    color: "from-purple-500 to-pink-600",
    image: "/rasmeimage/fere1.png",
    link: "/ritual/phere"
  },
  {

    id: 13,
    name: "फोटोग्राफी",
    category: "Wedding",
    description: "हर पल को यादगार बनाने के लिए फोटो।",
    icon: Camera,
    color: "from-blue-500 to-cyan-600",
    image: "/rasmeimage/photograpy.png",
    link: "/ritual/photography"
  },
  {
    id: 14,
    name: "विदाई",
    category: "Post-Wedding",
    description: "दुल्हन का मायके रूप से अपने मायके से विदा लेना।",
    icon: Globe,
    color: "from-red-500 to-orange-600",
    image: "/rasmeimage/bidai.png",
    link: "/ritual/vidai"
  },
  {
    id: 15,
    name: "गृह प्रवेश",
    category: "Post-Wedding",
    description: "दुल्हन का ससुराल में पहला प्रवेश।",
    icon: MapPin,
    color: "from-green-500 to-teal-600",
    image: "/rasmeimage/grahpravesh.png",
    link: "/ritual/grih-pravesh"
  },
  {
    id: 16,
    name: "रिसेप्शन",
    category: "Post-Wedding",
    description: "नवविवाहित जोड़े के स्वागत हेतु आयोजन।",
    icon: Smile,
    color: "from-indigo-500 to-purple-600",
    image: "/rasmeimage/reception.png",
    link: "/ritual/reception"
  }
];