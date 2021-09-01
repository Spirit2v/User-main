import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Styles from '../../../Assets/Styles/Styles';
import Header_Component from '../../../Components/Header_Component';

import C_materials from '../../../Assets/Icons/Construction_Materials.png';
import C_agents from '../../../Assets/Icons/Agents.png';
import C_vehicles from '../../../Assets/Icons/Construction_Vehicles.png';
import C_chemicals from '../../../Assets/Icons/construction_chemical.png';
import Cement from '../../../Assets/Icons/cement.png';
import Bricks from '../../../Assets/Icons/BB.png';
import Sand from '../../../Assets/Icons/sand.png';
import Stones from '../../../Assets/Icons/stone.png';
import Rmc from '../../../Assets/Icons/Rmc.png';
import Tmt from '../../../Assets/Icons/TNT.png';
import Marble_tiles from '../../../Assets/Icons/Marbleandtiles.png';
import Pipes from '../../../Assets/Icons/pipes.png';
import Paint_Putty from '../../../Assets/Icons/Paint_Putty.png';
import Shuttering from '../../../Assets/Icons/Shuttering.png';
import Dumper from '../../../Assets/Icons/dumper.png';
import Transmitmixer from '../../../Assets/Icons/transitmixerwhite.png';
import Crane from '../../../Assets/Icons/Crane.png';
import Crawlercrane from '../../../Assets/Icons/crawlercrane.png';
import Tyremountedcrane from '../../../Assets/Icons/TyreMountedCrane.png';
import Tipper from '../../../Assets/Icons/tipper.png';
import Compactor from '../../../Assets/Icons/Compactor.png';
import Excavator from '../../../Assets/Icons/excavator.png';
import Motorgrader from '../../../Assets/Icons/MotorGrader.png';
import Forklifter from '../../../Assets/Icons/ForkLifter.png';
import Truck from '../../../Assets/Icons/Truck.png';
import Tractor from '../../../Assets/Icons/Tractor.png';
import Tanker from '../../../Assets/Icons/Tanker.png';
import Roadroller from '../../../Assets/Icons/road-roller.png';
import Backhoeloader from '../../../Assets/Icons/BackhoeLoader.png';
import ConstructionMaterials_card from '../../../Components/ConstructionMaterials_card'
import ConstructionChemicals from './ConstructionChemicals';
import { ScrollView } from 'react-native-gesture-handler';

const ConstructionVehicles = ({navigation}) => {
  return (<View
  style={{flex:1,
  backgroundColor:'#121417'
  }}
  >
     
    <ScrollView> 
       <View style={Styles.Service_container}>
  


<TouchableOpacity
onPress={()=>navigation.navigate('Dumper')}
>
<ConstructionMaterials_card Icon={Dumper} Title="Dumper" />
     
</TouchableOpacity>


<TouchableOpacity
onPress={()=>navigation.navigate('TransitMixture')}
>
<ConstructionMaterials_card
          Icon={Transmitmixer}
          Title="Transmit Mixer"
        />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Crane')}
>
<ConstructionMaterials_card Icon={Crane} Title="Crane" />
</TouchableOpacity>

<TouchableOpacity

onPress={()=>navigation.navigate('CrawlerCrane')}
>
<ConstructionMaterials_card Icon={Crawlercrane} Title="Crawler Crane" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('TyreMountedCrane')}
>
<ConstructionMaterials_card
          Icon={Tyremountedcrane}
          Title="Tyre Mounted Crane"
        />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Tipper')}
>
<ConstructionMaterials_card Icon={Tipper} Title="Tipper" />
</TouchableOpacity>
<TouchableOpacity
onPress={()=>navigation.navigate('Compactor')}
>
<ConstructionMaterials_card Icon={Compactor} Title="Compactor" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Excavator')}
>
<ConstructionMaterials_card Icon={Excavator} Title="Excavator" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('MotorGrader')}
>
<ConstructionMaterials_card Icon={Motorgrader} Title="Motor Grader" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Forklift')}
>
<ConstructionMaterials_card Icon={Forklifter} Title="Fork Lifter" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Truck')}
>
<ConstructionMaterials_card Icon={Truck} Title="Truck" />
</TouchableOpacity>

<TouchableOpacity
onPress={()=>navigation.navigate('Tractor')}
>
<ConstructionMaterials_card Icon={Tractor} Title="Tractor" />
</TouchableOpacity>


 
      <TouchableOpacity
      onPress={()=>navigation.navigate('Tanker')}
      >
        
       <ConstructionMaterials_card Icon={Tanker} Title="Tanker" />
       </TouchableOpacity>
      <TouchableOpacity
      
      > 
         <ConstructionMaterials_card Icon={Roadroller} Title="Road-Roller" />
         </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>navigation.navigate('BackHoeLoader')}
      > 
        <ConstructionMaterials_card
          Icon={Backhoeloader}
          Title="Back Hoe Holder"
        />
        
        </TouchableOpacity>
       
       
        
      
       
       
        
    
      
       
  </View></ScrollView>
  </View>
  );
};

export default ConstructionVehicles;
