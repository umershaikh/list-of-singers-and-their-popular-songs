import { Component } from 'react'

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            singers: [
                {
                    'id': '1',
                    'image': 'https://i.scdn.co/image/ab67616d00001e023f3d35703bdcd917dad51c4f',
                    'song': 'Pasoori',
                    'name': 'Ali Sethi',
                    'url': 'https://www.youtube.com/watch?v=5Eqb_-j3FDA'
                },
                {
                    'id': '2',
                    'image': 'https://i.ytimg.com/vi/B-J_PuEhyOM/maxresdefault.jpg',
                    'song': 'Rafta Rafta',
                    'name': 'Atif Aslam',
                    'url': 'https://www.youtube.com/watch?v=B-J_PuEhyOM'
                },
                {
                    'id': '3',
                    'image': 'https://i.ytimg.com/vi/O3pUsXxCfEk/maxresdefault.jpg',
                    'song': 'Muaziz Sarif',
                    'name': 'Faris Shafi',
                    'url': 'https://www.youtube.com/watch?v=O3pUsXxCfEk'
                },
                {
                    'id': '4',
                    'image': 'https://c.saavncdn.com/959/Thoda-Thoda-Pyaar-Hindi-2021-20210212084501-500x500.jpg',
                    'song': 'Thoda Thoda Pyaar',
                    'name': 'Stebin Ben',
                    'url': 'https://www.youtube.com/watch?v=USccSZnS8MQ'
                },
                {
                    'id': '5',
                    'image': 'https://i.ytimg.com/vi/94o73K5T0MQ/maxresdefault.jpg',
                    'song': 'Har Funn Maula',
                    'name': 'Vishal Dadlani',
                    'url': 'https://www.youtube.com/watch?v=94o73K5T0MQ'
                },
                {
                    'id': '6',
                    'image': 'https://www.ilyricshub.com/wp-content/uploads/2023/02/kudiye-ni-teri-selfie.jpg',
                    'song': 'Kudiye Ni Teri',
                    'name': ' The PropheC',
                    'url': 'https://www.youtube.com/watch?v=V5cV30yFXLA'
                },
                {
                    'id': '7',
                    'image': 'https://i.ytimg.com/vi/vG4CSv_thFc/sddefault.jpg',
                    'song': 'Kahani Suno 2.0',
                    'name': ' Kaifi Khalil',
                    'url': 'https://www.youtube.com/watch?v=_XBVWlI8TsQ'
                },
                {
                    'id': '8',
                    'image': 'https://i.ytimg.com/vi/1ZNaoJ7jEiI/maxresdefault.jpg',
                    'song': 'Apne To Apne Hote Hain',
                    'name': 'Sonu Sigham',
                    'url': 'https://www.youtube.com/watch?v=1ZNaoJ7jEiI'
                }
            ]
        }
    }
    render() {
        return (
            <>
                {this.state.singers.map(singer =>
                    <a rel="noreferrer" target='_blank' href={singer.url}>
                        <div key={singer.id} className='hover:shadow-gray-700 shadow-lg shadow-gray-800 overflow-hidden my-5 bg-gray-200 sm:rounded-lg'>
                            <img className='w-full h-60 object-cover' src={singer.image} alt={singer.name} />
                            <div className="border-t border-gray-200">
                                <dl>
                                    <div className="bg-gray-50 px-4 py-5 text-center sm:px-6">
                                        <h3 className="text-sm font-medium text-gray-500">Singer: <b>{singer.name}</b></h3>
                                        <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Song: <b>{singer.song}</b></dd>
                                        <div className='my-2'>
                                            <button href={singer.url} className="font-bold text-sm hover:bg-gray-900 bg-gray-800 font-semibold text-white py-2 px-4 rounded">Watch on Youtube</button>
                                        </div>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </a>
                )}
            </>
        );
    }
}
export default Cards