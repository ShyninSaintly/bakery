import {Grid, Item, Menu, Provider, View} from "@adobe/react-spectrum";
import {Link} from "react-router";


export const Sidebar = () => {
    return (
        <Provider>
            <Grid areas={['header header', 'sidebar content', 'footer footer']}
                columns={['200px','1fr']}
                rows={['auto','1fr','auto']}
                height='100vh'>
                <View gridArea='header'>HederSidebar</View>
                <View gridArea='sidebar'>
                    <Menu onAction={(key)=>console.log(key)}>
                        <Item>
                            <Link href={"#"}>
                                <Text>Домоэ</Text>
                            </Link>
                        </Item>
                        <Item>
                            <Link href="#">
                                <Text>Домоэ</Text>
                            </Link>
                        </Item>
                        <Item>
                            <Link href="#">
                                <Text>Домоэ</Text>
                            </Link>
                        </Item>
                    </Menu>
                </View>
                <View gridArea='content'>Main Content</View>
                <View gridArea='footer'>Footer Content</View>
            </Grid>
        </Provider>
    );
};