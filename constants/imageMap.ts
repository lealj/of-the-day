export const SAMPLE_IMAGES: { [key: string]: { id: number, imgName: string; uri: any}} = {
	history: {
    id: 1,
		imgName: 'The Battle of Vercalle',
    uri: require('@/assets/sample_images/battle_of_vercellae.jpg'),
	},
  art: {
    id: 2,
    imgName: 'Joshua Commanding the Sun to Stand Still Upon Gibeon', 
    uri: require('@/assets/sample_images/joshua_commanding_the_sun_to_stand_still_upon_gibeon_2004.64.1.jpg')
  },
  paleontology: {
    id: 3,
    imgName: 'Fossil Find of the Century...',
    uri: require('@/assets/sample_images/torosaurus-dinosaur-skull.jpg')
  },
  software: {
    id: 4,
    imgName: 'The Birth of Rails',
    uri: require('@/assets/sample_images/ruby_gem.png')
  },
  cars: {
    id: 5,
    imgName: 'The Rise of a Legend',
    uri: require('@/assets/sample_images/ford_mustang_1964.jpg')
  },
  music: {
    id: 6,
    imgName: 'Beethoven\'s Silent Triumph',
    uri: require('@/assets/sample_images/Beethoven.jpg')
  }
};