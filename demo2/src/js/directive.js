/**
 * Created by ae on 2017/4/26.
 */
angular.module("app")
    .directive("inputDirective",function(){
        return {
            restrict:"E",
            template:'<div class="input-file">'
                        +'<label for="{{inputId}}"></label>'
                        +'<input type="file" id="{{inputId}}">'
                      +'</div>',
            scope:{},
            controller:function($scope){
                //console.log($scope);
                $scope.inputId='input'+$scope.$id;
            },
            link:function(scope,ele,attr){
                var inputFile=ele.find("div");
                //console.log(inputFile);
                //console.log(scope);//????？
                var input=$(inputFile).find("input");
                //console.log(input);
                input.on("change",function(){//!!!!!
                   // console.log(this.files);//类数组
                    var reader=new FileReader();//建议读取的图片大小小于10kb
                    reader.readAsDataURL(this.files[0]);
                    //什么时候文件读取结束,当文件读取完的时候会触发这个事件？？？
                    reader.onload=function(){
                        //拿到文件的结果（当文件读取完毕之后，它会把这个文件存放在这个属性里）
                            //console.log(reader.result);//打印出来的是base64编码格式
                        inputFile.find("label")[0].style.background='url('+this.result+') #ccc no-repeat center center';
                    };
                });
            }
        };
    });
