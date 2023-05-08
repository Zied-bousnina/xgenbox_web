import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import { Tabs, TabList, TabPanels, Tab, TabPanel, useStyleConfig } from '@chakra-ui/react'
const TabExemple = (props) => {
  const [activeTab, setActiveTab] = useState('0');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  const [selectedTab, setSelectedTab] = useState('0');

  // Define a custom style variant for the selected tab
  const selectedTabStyle = useStyleConfig("Tab", { variant: "selected" });

  return (
    // <div>
    //   <Nav tabs
    //   style={{
    //     margin:20
    //   }}
      
    //   >
    //     <NavItem
        
    //     style={{ backgroundColor: activeTab === '1' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2, width: '24%',   }}

    //     >
    //       <NavLink
    //         className={classnames({ active: activeTab === '1' })}
    //         onClick={() => { toggle('1'); }}
            
    //         style={{ color: '#FFFFFFBF',backgroundColor: activeTab === '1' ? '#3C976E' : '#6BC7AB',border: 'none'  }}

    //       >
    //         Dynamic Routing
    //       </NavLink>
    //     </NavItem>
    //     <NavItem
    //    style={{ backgroundColor: activeTab === '2' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2, width: '24%',   }}
    //     >
    //       <NavLink
    //         className={classnames({ active: activeTab === '2' })}
    //         onClick={() => { toggle('2'); }}
    //         style={{ color: '#FFFFFFBF',backgroundColor: activeTab === '2' ? '#3C976E' : '#6BC7AB',border: 'none',  }}
    //       >
    //         Cost reduction
    //       </NavLink>
    //     </NavItem>
    //     <NavItem
    //     style={{ backgroundColor: activeTab === '3' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2, width: '24%',   }}
    //     >
    //       <NavLink
    //         className={classnames({ active: activeTab === '3' })}
    //         onClick={() => { toggle('3'); }}
    //         style={{ color: '#FFFFFFBF',backgroundColor: activeTab === '3' ? '#3C976E' : '#6BC7AB',border: 'none',  }}
    //       >
    //        Improved cleanliness
    //       </NavLink>
    //     </NavItem>
    //     <NavItem
    //     style={{ backgroundColor: activeTab === '4' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2, width: '24%',   }}
    //     >
    //       <NavLink
    //         className={classnames({ active: activeTab === '4' })}
    //         onClick={() => { toggle('4'); }}
    //         style={{ color: '#FFFFFFBF',backgroundColor: activeTab === '4' ? '#3C976E' : '#6BC7AB',border: 'none',  }}
            
    //       >
    //        CO2 Reduction
    //       </NavLink>
    //     </NavItem>
    //   </Nav>
    //   <TabContent activeTab={activeTab}>
    //     <TabPane tabId="1">
    //       <p>Our solution uses real-time and historical data to optimize waste collection schedules and routes. Predictive analysis allows users to make decisions in advance and provides insights on bin locations.</p>
    //     </TabPane>
    //     <TabPane tabId="2">
    //       <p>Our solution significantly reduces the frequency of waste collection, which allows you to save on fuel, labor, and fleet maintenance costs. Together, our products can reduce your operating costs by up to 80%.</p>
    //     </TabPane>
    //     <TabPane tabId="3">
    //       <p>In densely populated areas, the rapid production of waste often leads to overflowing bins and littered streets. Our solution allows attendants to monitor fill levels throughout the day and act on notifications regarding overflowing bins. This helps to improve overall cleanliness and reduce litter.</p>
    //     </TabPane>
    //     <TabPane tabId="4">
    //       <p>The current methods of waste collection are highly polluting, as it is well known that garbage trucks have a very low energy efficiency. Our solution provides you with the means to have fewer trucks on the road for less time, which means less carbon emissions, less noise, less traffic, and less wear and tear on the roads.</p>
    //     </TabPane>
    //   </TabContent>
    // </div>
    <Tabs isFitted variant="enclosed">
  <TabList mb={{ base: '1em', md: '0' }} overflowX="auto" flexWrap="wrap">
    
    <Tab width="100%" 
    onMouseOver={
      ()=>setSelectedTab('1')
      }

    onMouseOut={
      ()=>setSelectedTab('0')
      
    }
    outline="none"
    onClick={()=>setSelectedTab('1')}
    style={{ backgroundColor: selectedTab === '1' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2, color:'#FFFFFFBF',fontSize: 18, outline:'none'   }}
    
    >Dynamic routing</Tab>
    <Tab 
    onMouseOver={
      ()=>setSelectedTab('2')
      }

    onMouseOut={
      ()=>setSelectedTab('0')
      
    }
    onClick={()=>setSelectedTab('2')}
    style={{ backgroundColor: selectedTab === '2' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2,  color:'#FFFFFFBF',fontSize: 18, outline:'none'
    
    
   }}
    
    width="100%">Cost reduction</Tab>
    <Tab
    onMouseOver={
      ()=>setSelectedTab('3')
      }

    onMouseOut={
      ()=>setSelectedTab('0')

    }
    onClick={()=>setSelectedTab('3')}
    style={{ backgroundColor: selectedTab === '3' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2, color:'#FFFFFFBF',fontSize: 18, outline:'none'   }}
    
     width="100%">Improved cleanlines</Tab>
    <Tab 
    onMouseOver={
      ()=>setSelectedTab('4')
      }

    onMouseOut={
      ()=>setSelectedTab('0')
      
    }
    onClick={()=>setSelectedTab('4')}
    style={{ backgroundColor: selectedTab === '4' ? '#3C976E' : '#6BC7AB', padding: 20, margin: 2, color:'#FFFFFFBF', fontSize: 18, outline:'none'   }}
    width="100%">CO2 reduction</Tab>
  </TabList>
  <TabPanels maxW="100%">
    <TabPanel>
      <p>Our solution uses real-time and historical data to optimize waste collection schedules and routes. Predictive analysis allows users to make decisions in advance and provides insights on bin locations.</p>
    </TabPanel>
    <TabPanel>
      <p>Our solution significantly reduces the frequency of waste collection, which allows you to save on fuel, labor, and fleet maintenance costs. Together, our products can reduce your operating costs by up to 80%.</p>
    </TabPanel>
    <TabPanel>
      <p>In densely populated areas, the rapid production of waste often leads to overflowing bins and littered streets. Our solution allows attendants to monitor fill levels throughout the day and act on notifications regarding overflowing bins. This helps to improve overall cleanliness and reduce litter.!</p>
    </TabPanel>
    <TabPanel>
      <p>The current methods of waste collection are highly polluting, as it is well known that garbage trucks have a very low energy efficiency. Our solution provides you with the means to have fewer trucks on the road for less time, which means less carbon emissions, less noise, less traffic, and less wear and tear on the roads.</p>
    </TabPanel>
  </TabPanels>
</Tabs>

  );
}

export default TabExemple;
