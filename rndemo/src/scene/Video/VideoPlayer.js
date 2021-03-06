import React,{Component} from 'react'

import Video from 'react-native-video'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'

type Props={}

class VideoPlayer extends Component<Props>{
    static defaultProps={}

    static propTypes={
        video:PropTypes.string,
        options:Props.object,
        author:PropTypes.object
    }

    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        const {video,options,author}=this.props
        return(
            <View style={StyleSheet.container}>
                <Video
                source={{uri:video}}
                rate={options.rate} //1.0表示默认速率
                volume={options.volume}  //声音大小
                paused={options.paused}  //默认播放
                repeat={options.repeat} //不重复播放
                muted={options.muted} //是否静音
                controls={options.controls} // 显示控件
                resizeMode={options.resizeMode} // 等比缩放
                style={options.style} // 样式
                onLoadStart={}//视频开始播放的时候调用方法
                onLoad={} //不断调用
                onProgress={}//播放时，每隔250ms，发送请求，附带当前播放时间
                onEnd={}//播放结束
                onError={}//遇到错误时
                ref={ref => (this.player = ref)}
                onBuffer={}
                />
                <View style={styles.authorInfo}>
                    <View style={styles.infoLeft}>
                        <Image
                        source={{ uri: author.avatar }}
                        style={styles.authorHeader}
                        />
                    </View>
                    <View style={styles.infoRight}>
                        <Text>{author.nickname}</Text>
                        <Text>{author.desc}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: "center",
      // alignItems: "center",
      backgroundColor: "#FCF5FF"
    },
    authorInfo: {
      padding: 12,
      flexDirection: "row",
      // alignItems: "center"
    },
    authorHeader: {
      width: 64,
      height: 64,
      borderRadius: 32
    },
    infoRight: {
      flex: 1,
      marginLeft: 8
    }
  });

  export default VideoPlayer