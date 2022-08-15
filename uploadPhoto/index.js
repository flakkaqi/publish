var app = new Vue({
    el: '#app',
    data: {
        textarea: '',
        imgList: [],
        videoList: [],
        fileList: [],
    },
    created: function () {
        this.fileData()
    },
    methods: {
        fileData() {
            this.fileList = []
        },
        beforeUploadImg(file) {
            if(file.type !== "image/jpeg") {
                this.$message.error('需要上传图片')
                return
            }
            const that = this
            let reader = new FileReader();
            reader.readAsDataURL(file);//异步读取文件内容，结果用data:url的字符串形式表示
            /*当读取操作成功完成时调用*/
            reader.onload = function(e) {
                const src = this.result
                // that.downloadFileImg(file.name, src)
                console.log('\n---src', src)
                that.imgList = [...that.imgList, ...[src]]
            }
            
        },
        beforeUploadVideo(file) {
            if(file.type !== "video/mp4") {
                this.$message.error('需要上传视频')
                return
            }
            const that = this
            let reader = new FileReader();
            reader.readAsDataURL(file);//异步读取文件内容，结果用data:url的字符串形式表示
            /*当读取操作成功完成时调用*/
            reader.onload = function(e) {
                const src = this.result
                // that.downloadFile(file.name, src)
                console.log('\n---src', src)
                that.videoList = [...that.videoList, ...[src]]
            }
        },
        downloadFileImg (fileName, content) {
        // 下载base64图片
            const base64ToBlob = (code) => {
            const parts = code.split(';base64,');
            const contentType = parts[0].split(':')[1];
            const raw = window.atob(parts[1]);
            const rawLength = raw.length;
            const uInt8Array = new Uint8Array(rawLength);
            for (let i = 0; i < rawLength; ++i) {
                uInt8Array[i] = raw.charCodeAt(i);
            }
            return new Blob([uInt8Array], {
                type: contentType
            });
            };
            const aLink = document.createElement('a');
            const blob = base64ToBlob(content); // new Blob([content]);
            const evt = document.createEvent('HTMLEvents');
            evt.initEvent('click', true, true); // initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
            aLink.download = fileName;
            aLink.href = URL.createObjectURL(blob);
            aLink.click();
        },
        getCurrentDay() {
            const date = new Date();
            const Y = date.getFullYear();    //  返回的是年份
            const m = date.getMonth() + 1;  //  返回的月份上个月的月份，记得+1才是当月
            const d = date.getDate(); 
            const M = m > 9 ? '0' + m : m;
            const D = d > 9 ? '0' + d : d;
            const day = Y + '-' + M + '-' + D
            return day
        },          
        publish() {
            const { textarea, imgList, videoList } = this
            const date = this.getCurrentDay()
            const obj = { title: textarea, date, imgList, videoList }
            const list = [...this.fileList, ...[obj]]
            console.log('\n\n---list---', list)
            sessionStorage.setItem('fileListStr', JSON.stringify(list))
            // 写入json文件
        }
    }
})