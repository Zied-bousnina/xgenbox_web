import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
export default function Faq() {
  const faq = [
    {
    id:1,
    title: "What are the benefits of using XGENBOX's waste bin?",
    content: `The XGENBOX trash can offers many advantages :`,
    hasList:true,
    list:[
      "Data on waste volume and collection history",
      "Elimination of arbitrary waste collections",
      "Ability to identify high waste production areas for optimal bin placement",
      "Savings on waste management expenses",
      "Clean and hygienic public spaces with less waste overflow, pests, and odors",
      "Electricity savings through the use of solar energy",
      "Reduction of waste truck collections resulting in a reduction in fuel emissions, traffic congestion, and noise",
      "Revenue generated from advertising."
    ]

    },
    {
      id:2,
      title: "How does it communicate?",
      content: `3G telecommunication is used to send and receive signals from the bin. All data is collected and organized so that end users can optimize operations. A hosted server allows our units to have access anywhere in the world.`,
      hasList:false,
    },
    {
      id:3,
      title:"What are the ideal places for installation?",
      content:"Connected trash cans are ideal for highly trafficked areas where overflowing waste is common, such as a city's business districts, university campuses, shopping centers, tourist attractions, sports stadiums, etc.",
      hasList:false,
    },{
      id:4,
      title:"What about indoor locations ?",
      content: "In addition to the solar-powered model, we also offer a hybrid model that uses both solar and AC energy. Once plugged in, there is no limit to its energy consumption. Installation sites include airports, shopping centers, transit stations, etc.",
      hasList:false,
    },{
      id:5,
      title:"How long does it take to fully charge?",
      content:"On average, 2 to 3 days of 4 hours of sunlight are needed to fully recharge the device.",
      hasList:false,
    }, {
      id:6,
      title:"What happens if it's cloudy for several days?",
      content:"When fully charged, the trash can operate for up to 4 weeks on battery. Results may vary depending on the frequency of compaction and strength of the telecommunications signal, and the use of optional features (i.e. a Wi-Fi router, etc.).",
      hasList:false,
    }, {
      id:7,
      title:"Quelle est la durée de vie de la poubelle connectées et des pièces de rechange ?",
      content: "En général, la durée de vie varie de 7 à 8 ans et la batterie dure généralement 3 à 4 ans. Les résultats peuvent varier en fonction de l'utilisation, des conditions environnementales et de l'entretien.",
      hasList:false,

    }, {
      id:8,
      title:"Y a-t-il des risques de vandalisme, de vol et de dégradation en général ?",
      content:"Lors de l'installation, le châssis est généralement boulonné au sol dans les espaces publics. Il est également installé avec un GPS afin que les utilisateurs puissent surveiller son emplacement. Pour les pièces sensibles au vandalisme, à la corrosion ou aux pannes, nous utilisons des vis antivol et des matériaux résistants à la trempe tels que des couvercles en acier inoxydable et en polycarbonate.​",
      hasList:false,
    }, {
      id:9,
      title:"Which parts need to be serviced and how often?",
      content:"We recommend replacing the battery every 3-4 years and wiping down the polycarbonate solar panel cover whenever it looks dirty.",
      hasList:false,
    }, {
      id:10,
      title:"What technical support do you provide during and after the warranty period?",
      content:"When our customers first purchase our products, we provide extensive training and product manuals for maintenance and use. During the warranty period, we provide free technical support (warranty policy may differ by customer region). After the warranty period, we try to provide the same level of support based on our customer service oriented philosophy. For more information, please inquire about the warranty policy.",
      hasList:false,
    },{
      id:11,
      title:"How much does the bin cost?",
      content:"We offer various configurations to meet the different needs of our customers.",
      hasList:false,
    }


] 
  return (
    // <Container maxWidth="md" sx={{ mt: 20 }}>
<Accordion>
  {faq.map(e=>(
    <AccordionItem
    key={e.id}
    
    >
    <h2>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          {e.title}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      {e.content}
      {e.hasList && <ul>
        {e.list.map(e=>(
          <li>{e}</li>
          ))}
      </ul>}
    </AccordionPanel>
  </AccordionItem>

  ))}

</Accordion>
  );
}