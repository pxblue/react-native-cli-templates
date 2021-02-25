import { Drawer, DrawerBody, DrawerHeader, DrawerNavGroup, wrapIcon } from '@pxblue/react-native-components';
import React, { useState, useCallback } from 'react';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import { IconButton } from 'react-native-paper';
import * as Colors from '@pxblue/colors';

const Home = wrapIcon({ IconClass: MatIcon, name: 'home', flip: false });
const LooksOne = wrapIcon({ IconClass: MatIcon, name: 'looks-one', flip: false });
const LooksTwo = wrapIcon({ IconClass: MatIcon, name: 'looks-two', flip: false });

export const navGroupItems = [
    {
        title: 'Home Page',
        itemID: 'Home',
        icon: Home,
    },
    {
        title: 'Page One',
        itemID: 'PageOne',
        icon: LooksOne,
    },
    {
        title: 'Page Two',
        itemID: 'PageTwo',
        icon: LooksTwo,
    },
];

export const NavigationDrawer = ({ navigation }) => {
    const [selected, setSelected] = useState('Home');
    const selectItem = useCallback(
        (id) => {
            navigation.navigate(id);
            setSelected(id);
        },
        [navigation]
    );

    return (
        <Drawer activeItem={selected} onItemSelect={(id) => selectItem(id)}>
            <DrawerHeader
                title={'PX Blue'}
                subtitle={'React Native Project'}
                fontColor={Colors.white[50]}
                icon={
                    <IconButton
                        icon="menu"
                        size={24}
                        color={Colors.white[50]}
                        onPress={() => {
                            navigation.closeDrawer();
                        }}
                    />
                }
            />
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems} hidePadding={false} />
            </DrawerBody>
        </Drawer>
    );
};