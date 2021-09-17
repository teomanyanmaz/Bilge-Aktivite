import { observer } from "mobx-react-lite";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button, Container, Menu, Image, Dropdown } from "semantic-ui-react";
import { useStore } from "../stores/store";

export default observer(function NavBar() {
    const {
        userStore: { user, logout },
    } = useStore();
    return (
        <Menu inverted fixed="top">
            <Container>
                <Menu.Item as={NavLink} exact to="/" header>
                    <img
                        src="/assets/logo.png"
                        alt="logo"
                        style={{ marginRight: "10px" }}
                    />
                    Bilge Aktivite
                </Menu.Item>
                <Menu.Item as={NavLink} to="/activities" name="Aktiviteler" />
                <Menu.Menu position="right">
                    <Menu.Item>
                        <Button
                            as={NavLink}
                            to="/createActivity"
                            color="teal"
                            content="Aktivite Yarat"
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Button
                            as={NavLink}
                            to="/createActivity"
                            color="teal"
                            content="Model Yarat"
                        />
                    </Menu.Item>
                    <Menu.Item>
                        <Image
                            src={user?.image || "/assets/user.png"}
                            avatar
                            spaced="right"
                        />
                        <Dropdown pointing="top left" text={user?.displayName}>
                            <Dropdown.Menu>
                                <Dropdown.Item
                                    as={Link}
                                    to={`/profiles/${user?.username}`}
                                    text="Profilim"
                                    icon="user"
                                />
                                <Dropdown.Item onClick={logout} text="Çıkış Yap" icon="power" />
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    );
});
