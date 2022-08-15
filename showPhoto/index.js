var app = new Vue({
    el: '#app',
    data: {
        fileList: [],
    },
    created: function () {
    //    this.getData()
        const fileListStr = sessionStorage.getItem('fileListStr')
        this.fileList = fileListStr ? JSON.parse(fileListStr) : []
    },
    methods: {
        getData() {
            // const list = [
            //     {
            //         title: '发表心情1',
            //         date: '2022-07-12 10:10',
            //         imgList: [
            //         ],
            //         videoList: []
            //     },
            //     {
            //         title: '发表心情2',
            //         date: '2022-08-12 15:30',
            //         imgList: [
            //         ],
            //         videoList: []
            //     },
            //     {
            //         title: '发表心情3',
            //         date: '2022-07-22 19:55',
            //         imgList: [
            //             ''
            //         ],
            //         videoList: []
            //     },
            //     {
            //         title: '发表心情4',
            //         date: '2022-08-02 20:20',
            //         imgList: [],
            //         videoList: []
            //     },
            //     {
            //         title: '发表心情4',
            //         date: '2022-08-02 20:21',
            //         imgList: [],
            //         videoList: []
            //     },
            // ]
            
        }
    }
})