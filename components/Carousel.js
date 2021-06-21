import React from 'react'
import Carousel from 'react-native-snap-carousel'
import { View, StyleSheet, Text, Image } from 'react-native'

const SLIDER_1_FIRST_ITEM = 1
const sliderWidth = 350
const itemWidth = 200

export class MyCarousel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            slider1ActiveSlide: SLIDER_1_FIRST_ITEM,
            entries: [
                {
                    title: 'Pamela',
                    subtitle: 'Una de las gatas más copadas que vas a conocer en tu vida',
                    illustration: 'https://images3.alphacoders.com/865/thumb-1920-86537.jpg',
                    location: 'Villa del Parque - CABA'
                },
                {
                    title: 'Benson',
                    subtitle: 'Muy juguetón y mimoso',
                    illustration: 'https://i.pinimg.com/originals/c7/39/87/c73987ec05ce829f4ca959d1c1f576c0.jpg',
                    location: 'Villa urquiza - CABA'
                },
                {
                    title: 'Mimi',
                    subtitle: 'Divina, ojalá tuviera lugar en casa para quedármela ',
                    illustration: 'https://i.pinimg.com/originals/36/96/8c/36968c6cce7610f295d01bb38bbf213b.jpg',
                    location: 'San Justo - La Matanza'
                },
                {
                    title: 'Nina',
                    subtitle: 'Hermosa gatita, con mucha personalidad',
                    illustration: 'http://www.fondoswiki.com/Uploads/fondoswiki.com/ImagenesGrandes/entranable-gatito-4.jpg',
                    location: 'Almagro - CABA'
                },
                {
                    title: 'Limona',
                    subtitle: 'Es medio insoportable, pero buena',
                    illustration: 'https://imagenesbonitas.co/wp-content/uploads/2015/08/gato7.jpg',
                    location: 'Villa Urquiza - CABA'
                },
                {
                    title: 'Pelusa',
                    subtitle: 'Gran amiga y compañera',
                    illustration: 'http://2.bp.blogspot.com/-grhhIMvtsPc/UF4ER_wA6YI/AAAAAAAAA1s/DF7G78BKvd8/s1600/cute-cats-wallpaper-24.jpg',
                    location: 'Caballito - CABA'
                }
            ]
        }
    }

    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Image  source={{ uri: item.illustration }} style={{ width: 400, height: 400 }} />
                <View style={styles.cardContainer}>
                    <Text style={styles.title}>{ item.title }</Text>
                    <Text style={styles.subtitle}>{ item.subtitle }</Text>
                    <Text style={styles.location}>{ item.location }</Text>
                </View>  
            </View>
        );
    }

    render () {
        return (
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
              layout={'tinder'} 
              layoutCardOffset={10}  
              inactiveSlideScale={0.5}
              inactiveSlideOpacity={0.7}            
            />
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        marginTop: 15,
        overflow: 'visible',
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    cardContainer: {
        flex: 1
        
    },
    title: {
        width: 400,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    subtitle: {
        width: 400,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        color: 'gray',
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    location: {
        width: 400,
        paddingHorizontal: 30,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 12,
        fontWeight: '500',
        textAlign: 'right',
         
    }
})