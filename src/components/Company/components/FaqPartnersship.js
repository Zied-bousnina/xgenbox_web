import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
export default function FaqPartnersship() {
  const faq = [
   
    {
      id:1,
      title: "What types of partnerships do you offer ?",
      content: `We offer two main types of partnership: Distributor and Agent.

 

      Distributors will stock our products and resell them in their territories, provide services to customers, and maintain consistent branding and marketing efforts in their territories.
      
       
      
      Agents will connect us with sales opportunities and develop offers on a commission basis.`,
      hasList:false,
    },
    {
      id:2,
      title: "How to become a distributor ?",
      content: `We need a few basics when considering partnerships:`,
      hasList:true,
      list:[
        "Do you have a registered business in good standing?",
        "Is our solution adapted to your current business model?",
        "Do you have a realistic and achievable sales strategy and projection?",
        "Do you have experience in participating in government tenders or do you have experience in providing related solutions to the public sector?",
        "Do you have a good understanding of the waste management industry in your territory?",
      ]
  
      },
    {
      id:3,
      title:"What are the conditions for becoming an exclusive distributor ?",
      content:"Exclusivity is generally reserved for partners who have developed a good working relationship with us for several years or who have performed at a high level in their territory in a short period of time. If you are interested in exclusivity, we are open to discussing it as long as you have a solid business case to present.",
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