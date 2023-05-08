import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
export default function FaQFeet() {
  const faq = [
    {
    id:1,
    title: "Fournissez vous un accès API ?",
    content: `Bien que nous recommandions à nos clients d'utiliser notre logiciel car il est optimisé pour afficher les données, il nous est possible de vous fournir une API.`,
    hasList:false,
   

    },
    {
      id:2,
      title: "Comment puis-je accéder au logiciel ?",
      content: `La plate-forme d'optimisation de la collecte des déchets est accessible à tout moment et peut être téléchargée gratuitement sur votre appareil intelligent via App Store ou Google Play.`,
      hasList:false,
    },
   


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