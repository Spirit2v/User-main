import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/home/Home';
import DashboardScreen from '../Screens/dashboard/Dashboard';
import ProfileScreen from '../Screens/profile/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Colors from '../Utils/Colors';
import {PRIMARY} from '../Assets/Colors/baseColor';
import Request1 from '../Screens/dashboard/services/Request1'
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import NotificationTab from '../Screens/Notifications';
import Profile_Details from '../Screens/profile/Profile_Details';
import Company_Details from '../Screens/profile/Company_Details';
import Company_Address from '../Screens/profile/Company_Address';
import RentingDetail from '../Screens/dashboard/services/vehicle/RentingDetail';
import Agents from '../Screens/dashboard/services/Agents';
import Cement from '../Screens/dashboard/services/material/Cement';
import RMCmixture from '../Screens/dashboard/services/material/RMCmixture';
import TMTsteel from '../Screens/dashboard/services/material/TMTsteel.js';
import Tractor from '../Screens/dashboard/services/vehicle/Tractor';
import Stones from '../Screens/dashboard/services/material/Stones';
import BricksAndBlock from '../Screens/dashboard/services/material/BricksAndBlock';
import MarbleAndTiles from '../Screens/dashboard/services/material/MarbleAndTiles';
import Pipes from '../Screens/dashboard/services/material/Pipes';
import PaintAndPutty from '../Screens/dashboard/services/material/PaintAndPutty';
import Dumper from '../Screens//dashboard/services/vehicle/Dumper';
import Sand from '../Screens//dashboard/services/material/Sand';
import BasicInformation from '../Screens/dashboard/services/vehicle/BasicInformation';
import PitchLeadScreen from '../Screens/PitchLeadScreen';
import LeadsScreen from '../Screens/LeadsScreen';
import PaperWork from '../Screens/dashboard/services/vehicle/PaperWork';
import Transmitmixer from '../Screens/dashboard/services/vehicle/TransitMixture';
import Crane from '../Screens/dashboard/services/vehicle/Crane';
import CrawlerCrane from '../Screens/dashboard/services/vehicle/CrawlerCrane';
import TyreMountedCrane from '../Screens/dashboard/services/vehicle/TyreMountedCrane';
import Tipper from '../Screens/dashboard/services/vehicle/Tipper';
import Compactor from '../Screens/dashboard/services/vehicle/Compactor';
import Roller from '../Screens/dashboard/services/vehicle/Roller';
import Tanker from '../Screens/dashboard/services/vehicle/Tanker';
import Forklift from '../Screens/dashboard/services/vehicle/Forklift';
import BackhoeLoader from '../Screens/dashboard/services/vehicle/BackhoeLoader';

import Excavator from '../Screens/dashboard/services/vehicle/Excavator';
import Truck from '../Screens/dashboard/services/vehicle/Truck';
import MotorGrader from '../Screens/dashboard/services/vehicle/MotorGrader';
import NewLeadScreen from '../Screens/dashboard/Leads/NewLeadTabScreen';
import Waterproofing from '../Screens/dashboard/services/chemical/Waterproofing';
import ConcreteAdmixture from '../Screens/dashboard/services/chemical/ConcreteAdmixture';
import SurfaceTreatments from '../Screens/dashboard/services/chemical/SurfaceTreatments';
import GroutsAndAnchor from '../Screens/dashboard/services/chemical/GroutsAndAnchor';
import ConcreteRepair from '../Screens/dashboard/services/chemical/ConcreteRepair';
import Sealant from '../Screens/dashboard/services/chemical/Sealant';
import Flooring from '../Screens/dashboard/services/chemical/Flooring';
import Tiling from '../Screens/dashboard/services/chemical/Tiling';
import DashboardDash from '../Screens/dashboard/DashboardDash';
import DashedIcon from '../Components/DashedIcon';
import Site_AddressBook from '../Screens/profile/Site_AddressBook';
import BrickEstimation from '../Screens/home/estimation/BrickEstimation';
const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const DashboardStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const homeHeaderOptions = ({navigation}) => ({
  headerTitle: null,
  headerShown: false,
  headerStyle: {backgroundColor: PRIMARY, elevation: 0},
  headerTintColor: Colors.yellow,
  headerRight: () => {
    return (
      <View
        style={{flexDirection: 'row', marginRight: 20, alignItems: 'center'}}>
        <TouchableOpacity
        onPress={()=>navigation.navigate('Cart')}
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
            alignItems: 'center',
          }}>
      <Ionicons name="cart-outline" size={22} color='#ffb600' />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationTab')}>
          <MaterialIcons
            name="notifications-none"
            size={22}
            color={Colors.yellow}
          />
        </TouchableOpacity>
      </View>
    );
  },
  headerLeft: () => (
    <View>
      {/* // style={{
      //   height: 36,
      //   width: 36,
      //   borderWidth: 1,
      //   borderColor: Colors.yellow,
      //   borderRadius: 18,
      //   marginLeft: 10,
      //   borderStyle: 'dashed',
      //}}> */}
      </View>
  ),
});

const dashbardHeaderOptions = ({navigation}) => ({
  headerTitleAlign: 'left',
  headerBackTitleVisible: false,
  headerShown: true,
  headerStyle: {backgroundColor: PRIMARY, elevation: 0},
  headerTintColor: Colors.yellow,
  headerRight: () => {
    return (
      <View
        style={{flexDirection: 'row', marginRight: 20, alignItems: 'center'}}>
          <TouchableOpacity
        // onPress={() => navigation.navigate('Cart')}
          // style={{
          //   flexDirection: 'row',
          //   marginHorizontal: 20,
          //   alignItems: 'center',
          // }}
          >
    <Ionicons name="sunny-outline" size={28} color='#ffb600' />
        </TouchableOpacity>
    
    <TouchableOpacity
    onPress={()=>navigation.navigate('Cart')}
    style={{marginHorizontal:22}}
    >
    <Ionicons name="cart-outline" size={24} color='#ffb600' />
    </TouchableOpacity>
  
        <TouchableOpacity
          onPress={() => navigation.navigate('NotificationTab')}>
          <MaterialIcons
            name="notifications-none"
            size={22}
            color={Colors.yellow}
          />
        </TouchableOpacity>
      </View>
    );
  },
});

const profileHeaderOptions = ({navigation}) => ({
  headerBackTitleVisible: false,
  headerShown: true,
  headerStyle: {backgroundColor: PRIMARY, elevation: 0},
  headerTintColor: Colors.yellow,
  headerRight: () => {
    return (
      <View
      style={{flexDirection:'row'}}
      >
              <TouchableOpacity
        // onPress={() => navigation.navigate('Cart')}
          style={{
         
            marginHorizontal: 20,
            alignItems: 'center',
          }}
          >
    <Ionicons name="sunny-outline" size={24} color='#ffb600' />
        </TouchableOpacity>
      <TouchableOpacity
         onPress={()=>navigation.navigate('Cart')}>
      <Ionicons name="cart-outline" size={22} color='#ffb600' />
      </TouchableOpacity>

      <View
      style={{width:26}}
      ></View>
      
      <TouchableOpacity
        style={{marginRight: 20}}
        onPress={() => navigation.navigate('NotificationTab')}>
        <MaterialIcons
          name="notifications-none"
          size={22}
          color={Colors.yellow}
        />
      </TouchableOpacity>
      </View>
    );
  },
 });

function Home() {
  return (
    <HomeStack.Navigator screenOptions={homeHeaderOptions}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen
        name="NotificationTab"
        component={NotificationTab}
        options={{headerShown: false}}
      />

    </HomeStack.Navigator>
  );
}

function Dashbard() {
  return (
    <DashboardStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={dashbardHeaderOptions}>
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
      <HomeStack.Screen
        name="BrickEstimation"
        component={BrickEstimation}
        options={{headerShown: false}}
      />
      <DashboardStack.Screen name="PitchLead" component={PitchLeadScreen} />
      <DashboardStack.Screen
        name="NewLeads"
        component={NewLeadScreen}
        options={{headerShown: false}}
      />
      <DashboardStack.Screen
        name="Leads"
        component={LeadsScreen}
        options={{headerShown: false}}
      />
      <DashboardStack.Screen
        name="NotificationTab"
        component={NotificationTab}
        options={{headerShown: false}}
      />


<DashboardStack.Screen
        name="DashboardDash"
        component={DashboardDash}
        options={{
          headerTitle: 'Dashboard',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />


      <DashboardStack.Screen
        name="RentingDetail"
        component={RentingDetail}
        options={{
          headerTitle: 'Renting Detail',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="TyreMountedCrane"
        component={TyreMountedCrane}
        options={{
          headerTitle: 'Tyre Mounted Crane',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Agents"
        component={Agents}
        options={{
          headerTitle: 'Agents',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Tipper"
        component={Tipper}
        options={{
          headerTitle: 'Tipper',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="TransitMixture"
        component={Transmitmixer}
        options={{
          headerTitle: 'Transit Mixture',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Sand"
        component={Sand}
        options={{
          headerTitle: 'Sand',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Crane"
        component={Crane}
        options={{
          headerTitle: 'Crane',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="CrawlerCrane"
        component={CrawlerCrane}
        options={{
          headerTitle: 'Crawler Crane',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Tractor"
        component={Tractor}
        options={{
          headerTitle: 'Tractor',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="BricksAndBlock"
        component={BricksAndBlock}
        options={{
          headerTitle: 'Bricks & Blocks',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Stones"
        component={Stones}
        options={{
          headerTitle: 'Stones',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Cement"
        component={Cement}
        options={{
          headerTitle: 'Cement',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="RMCmixture"
        component={RMCmixture}
        options={{
          headerTitle: 'RMC Mixture',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="TMTsteel"
        component={TMTsteel}
        options={{
          headerTitle: 'TMT Steel & Iron',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="BasicInformation"
        component={BasicInformation}
        options={{
          headerTitle: 'Basic Information',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="MarbleAndTiles"
        component={MarbleAndTiles}
        options={{
          headerTitle: 'Marble & tiles',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Pipes"
        component={Pipes}
        options={{
          headerTitle: 'Pipes',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="PaintAndPutty"
        component={PaintAndPutty}
        options={{
          headerTitle: 'Paint & Putty',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="PaperWork"
        component={PaperWork}
        options={{
          headerTitle: 'Paper Work',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Compactor"
        component={Compactor}
        options={{
          headerTitle: 'Compactor',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Roller"
        component={Roller}
        options={{
          headerTitle: 'Roller',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Tanker"
        component={Tanker}
        options={{
          headerTitle: 'Tanker',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Forklift"
        component={Forklift}
        options={{
          headerTitle: 'ForkLift',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="BackHoeLoader"
        component={BackhoeLoader}
        options={{
          headerTitle: 'Backhoe Loader',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <DashboardStack.Screen
        name="Excavator"
        component={Excavator}
        options={{
          headerTitle: 'Excavator',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Dumper"
        component={Dumper}
        options={{
          headerTitle: 'Dumper',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Truck"
        component={Truck}
        options={{
          headerTitle: 'Truck',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="MotorGrader"
        component={MotorGrader}
        options={{
          headerTitle: 'MotorGrader',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="ConcreteAdmixture"
        component={ConcreteAdmixture}
        options={{
          headerTitle: 'Concrete Admixture',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Waterproofing"
        component={Waterproofing}
        options={{
          headerTitle: 'Waterproofing',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="SurfaceTreatments"
        component={SurfaceTreatments}
        options={{
          headerTitle: 'Surface Treatment',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="GroutsAndAnchor"
        component={GroutsAndAnchor}
        options={{
          headerTitle: 'Grouts & Anchor',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="ConcreteRepair"
        component={ConcreteRepair}
        options={{
          headerTitle: 'Concrete Repair',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Sealant"
        component={Sealant}
        options={{
          headerTitle: 'Sealant',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />

      <DashboardStack.Screen
        name="Flooring"
        component={Flooring}
        options={{
          headerTitle: 'Flooring',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
         <DashboardStack.Screen
        name="Request"
        component={Request1}
    
        options={{
          headerTitle: 'Request',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
          headerShown:false
        }}
      />
      <DashboardStack.Screen
        name="Tiling"
        component={Tiling}
        options={{
          headerTitle: 'Tiling',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
    </DashboardStack.Navigator>
  );
}

function Profile() {
  return (
    <ProfileStack.Navigator initialRouteName="Profile">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={profileHeaderOptions}
      />
      <ProfileStack.Screen
        name="Profile_Details"
        component={Profile_Details}
        options={{
          headerTitle: 'Profile Details',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <ProfileStack.Screen
        name="Company_Details"
        component={Company_Details}
        options={{
          headerTitle: 'Company Details',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
     <ProfileStack.Screen
        name="Site_AddressBook"
        component={Site_AddressBook}
        options={{
          headerTitle: 'Address Book',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
      <ProfileStack.Screen
        name="Company_Address"
        component={Company_Address}
        options={{
          headerTitle: 'Company Address',
          headerStyle: {backgroundColor: 'black'},
          headerTintColor: Colors.yellow,
        }}
      />
    </ProfileStack.Navigator>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.yellow,
        inactiveTintColor: Colors.lightgrey,
        tabStyle: {
          justifyContent: 'center',
          alignItems: 'center',
        },
        safeAreaInsets: {bottom: 10},
        style: {
          height: 56,
          backgroundColor: PRIMARY,
          borderTopWidth: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const tintColor = focused ? Colors.yellow : Colors.lightgrey;
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Dashboard') {
            iconName = focused ? 'grid-outline' : 'grid-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }
          return <Ionicons name={iconName} size={18} color={tintColor} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Tab.Screen
        name="Dashboard"
        component={Dashbard}
        options={{title: 'DashBoard'}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{title: 'Profile', tabBarVisible: true}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
