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
                //console.log(scope);//????��
                var input=$(inputFile).find("input");
                //console.log(input);
                input.on("change",function(){//!!!!!
                   // console.log(this.files);//������
                    var reader=new FileReader();//�����ȡ��ͼƬ��СС��10kb
                    reader.readAsDataURL(this.files[0]);
                    //ʲôʱ���ļ���ȡ����,���ļ���ȡ���ʱ��ᴥ������¼�������
                    reader.onload=function(){
                        //�õ��ļ��Ľ�������ļ���ȡ���֮�����������ļ��������������
                            //console.log(reader.result);//��ӡ��������base64�����ʽ
                        inputFile.find("label")[0].style.background='url('+this.result+') #ccc no-repeat center center';
                    };
                });
            }
        };
    });
