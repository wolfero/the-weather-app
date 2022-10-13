import { Box, Grid, GridItem, HStack, Img } from '@chakra-ui/react';

const Card = () => {
    return (
        <Grid bg={'gray.500'} rounded={'lg'} p={'2'}>
            <HStack justifySelf={'center'}>
                <Box fontSize={'2rem'}>13/10/2022</Box>
                <Img src='icons/01d.png' />
            </HStack>
            <HStack justifySelf={'center'}>
                <Box fontSize={'4rem'}>30ºC</Box>
                <Grid
                    templateAreas={`"title title"
                        "description_1 value_1"
                        "description_2 value_2"
                        "description_3 value_3"
                        "description_4 value_4"`}
                    gridTemplateRows={'max-content'}
                    gridTemplateColumns={'7rem'}
                    fontSize={'1rem'}
                >
                    <GridItem area={'title'} as='u' textAlign={'left'}>
                        Details:
                    </GridItem>
                    <GridItem area={'description_1'} textAlign={'left'}>
                        Feels like:
                    </GridItem>
                    <GridItem area={'value_1'}>32ºC</GridItem>
                    <GridItem area={'description_2'} textAlign={'left'}>
                        Wind:
                    </GridItem>
                    <GridItem area={'value_2'}>2m/s</GridItem>
                    <GridItem area={'description_3'} textAlign={'left'}>
                        Humidity:
                    </GridItem>
                    <GridItem area={'value_3'}>15%</GridItem>
                    <GridItem area={'description_4'} textAlign={'left'}>
                        Pressure:
                    </GridItem>
                    <GridItem area={'value_4'}>15hPa</GridItem>
                </Grid>
            </HStack>
        </Grid>
    );
};

export default Card;
