import { styles } from "./styles";
import { Item } from "@/components/Item";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Filter } from "@/components/Filter";
import { FilterStatus } from "@/types/FilterStatus";
import { View, Image, TouchableOpacity, Text } from "react-native"

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE]
export function Home() {
    return (
        <View style={styles.container}>
            <Image source={require("@/assets/logo.png")} style={styles.logo} />
            <View style={styles.form}>
                <Input placeholder="O que você precisa comprar?" />
                <Button title="Entrar" />
            </View>
            <View style={styles.content}>
                <View style={styles.header}>
                    {FILTER_STATUS.map((status) => (
                        <Filter key={status} status={status} isActive />
                    ))}
                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.clearText}>
                            Limpar
                        </Text>
                    </TouchableOpacity>
                </View>
                <Item
                    data={{ status: FilterStatus.DONE, description: "Café" }}
                    onStatus={() => console.log("mudar o status")}
                    onRemove={() => console.log("remover")}
                />
            </View>
        </View>
    )
}
