import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";

const MarkerInformation = ({ title, address, latitude, longitude, image }) => {

    return (
        <View style={styles.div}>
            <View style={styles.div1}>
                <Pressable style={[styles.div2, styles.div2Layout]} onPress={() => { }}>
                    <View style={styles.span}>
                        <Text style={[styles.location, styles.photoLayout]}>Location</Text>
                        <Text style={[styles.photo, styles.photoPosition]}>Photo</Text>
                    </View>
                    <Image
                        style={[styles.image2Icon, styles.div2Layout]}
                        resizeMode="cover"
                        source={image}
                    />                </Pressable>
                <View style={styles.div3}>
                    <Text style={[styles.roldSkovV, styles.div4Layout]}>{title}</Text>

                    <Text style={[styles.roldSkov9520, styles.roldSkov9520Typo]}>{address}</Text>

                    <View style={[styles.div4, styles.div4Layout]}>
                        {/* 🔁 Show coordinates */}
                        <Text style={[styles.cleaned1Minute, styles.roldSkov9520Typo]}>
                            Lat: {latitude?.toFixed(4)} | Lng: {longitude?.toFixed(4)}
                        </Text>
                    </View>
                </View>
                <Pressable style={[styles.button, styles.div4Layout]} onPress={() => { }}>
                    <Image style={styles.icon} resizeMode="cover" source="button.svg" />
                </Pressable>
            </View>
            <View style={styles.placeholderParent}>
                <Image style={[styles.placeholderIcon, styles.placeholderIconLayout]} resizeMode="cover" source="Placeholder.png" />
                <Image style={[styles.placeholderIcon1, styles.placeholderIconLayout]} resizeMode="cover" source="Placeholder.png" />
                <Pressable style={[styles.div5, styles.divLayout]} onPress={() => { }}>
                    <Image style={styles.divChild} resizeMode="cover" source="Ellipse 5.png" />
                    <View style={[styles.div6, styles.div6Layout]}>
                        <Text style={[styles.amalieJrgensen, styles.roldSkov9520Typo]}>Amalie Jørgensen</Text>
                        <Text style={[styles.level17, styles.div6Layout]}>Level 17</Text>
                    </View>
                </Pressable>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    div2Layout: {
        width: 105,
        borderRadius: 5,
        left: 0,
        position: "absolute"
    },
    photoLayout: {
        height: 17,
        fontFamily: "Inter-Regular"
    },
    photoPosition: {
        top: 21,
        textAlign: "left"
    },
    div4Layout: {
        height: 20,
        position: "absolute"
    },
    roldSkov9520Typo: {
        lineHeight: 14,
        textAlign: "left",
        fontSize: 14,
        position: "absolute"
    },
    level17Layout: {
        height: 14,
        left: 0
    },
    placeholderIconLayout: {
        height: 44,
        borderRadius: 5
    },
    divLayout: {
        height: 36,
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    div6Layout: {
        width: 94,
        position: "absolute"
    },
    location: {
        width: 57,
        textAlign: "left",
        color: "#fff",
        fontSize: 14,
        height: 17,
        left: 0,
        position: "absolute",
        top: 1
    },
    photo: {
        width: 39,
        height: 17,
        fontFamily: "Inter-Regular",
        color: "#fff",
        fontSize: 14,
        left: 0,
        position: "absolute"
    },
    span: {
        top: 28,
        width: 96,
        height: 40,
        left: 0,
        position: "absolute",
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    image2Icon: {
        top: -1,
        height: 100
    },
    div2: {
        height: 96,
        top: 0
    },
    roldSkovV: {
        fontSize: 16,
        lineHeight: 16,
        color: "#000",
        top: 2,
        left: 0,
        width: 183,
        textAlign: "left",
        fontFamily: "Inter-Regular",
        height: 20
    },
    roldSkov9520: {
        top: 29,
        color: "#525252",
        width: 190,
        height: 17,
        fontFamily: "Inter-Regular",
        left: 0
    },
    frameIcon: {
        top: 3,
        overflow: "hidden",
        position: "absolute"
    },
    cleaned1Minute: {
        left: 22,
        color: "#737373",
        width: 161,
        height: 17,
        fontFamily: "Inter-Regular",
        top: 1
    },
    div4: {
        top: 56,
        width: 183,
        left: 0,
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    div3: {
        left: 112,
        width: 183,
        top: 0,
        position: "absolute",
        height: 100,
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    icon: {
        height: "100%",
        nodeWidth: 15,
        nodeHeight: 20,
        width: "100%"
    },
    button: {
        left: 311,
        width: 15,
        top: 0
    },
    div1: {
        width: 326,
        height: 100,
        backgroundColor: "rgba(0, 0, 0, 0)"
    },
    placeholderIcon: {
        width: 48
    },
    placeholderIcon1: {
        width: 46
    },
    divChild: {
        width: 32,
        height: 32,
        top: 2,
        left: 0,
        position: "absolute"
    },
    amalieJrgensen: {
        fontWeight: "500",
        fontFamily: "Roboto-Medium",
        width: 138,
        height: 16,
        color: "#000",
        top: 2,
        left: 0
    },
    level17: {
        fontSize: 12,
        lineHeight: 12,
        fontFamily: "Roboto-Regular",
        color: "#4b5563",
        height: 14,
        left: 0,
        top: 21,
        textAlign: "left"
    },
    div6: {
        left: 44,
        height: 36,
        backgroundColor: "rgba(0, 0, 0, 0)",
        top: 0
    },
    div5: {
        width: 171
    },
    placeholderParent: {
        flexDirection: "row",
        alignItems: "center",
        gap: 13,
        justifyContent: "center"
    },
    div: {
        shadowColor: "rgba(0, 0, 0, 0.1)",
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 6,
        elevation: 6,
        shadowOpacity: 1,
        borderRadius: 8,
        backgroundColor: "#fff",
        flex: 1,
        padding: 16,
        gap: 8,
        justifyContent: "center",
        width: "100%"
    }
});

export default MarkerInformation;
