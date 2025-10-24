import { styles } from "./styles";
import { View, Image } from "react-native"
import { Button } from "@/components/Button";

export function Home() {
    return (<View style={styles.container}><Image source={require("@/assets/logo.png")} style={styles.logo} /><Button title="Entrar" /></View>)
}
