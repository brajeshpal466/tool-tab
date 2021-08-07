import  styled from 'styled-components'


export const ToolsContainer = styled.div`
display: flex;
margin-top: 10px;
padding: 0px px ;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
`;



export const CardTitle = styled.div`
width:100%;
padding:5px 10px;
font-weight: 600;
border-bottom: 1px solid  lightgray   ;//#535455 
`;
 export const CardBody = styled.div`
 width:100%;
 padding: 5px 10px;
 display: flex;
 justify-content: center;
 align-items: center;
 text-align:center;
 `;

 export const InputWrapper = styled.div`
 width: 100%;
 display: flex;
 padding-top:10px;
 align-items: center;
 justify-content: center;
 `;

 export const UrlInput = styled.input`
   padding:5px;
   margin-right: 5px;
   border-radius: 3px;
   width: 90%;
   border: .5px solid #535455;
   outline-style  :none ;
 `;
 export const OpenBtn = styled.button`
 padding: 5px;
 margin-left:5px;
 border: none;
 margin-right: 10px;
 background: #fff;
 cursor: pointer;
 `;

export const ClipboardInput = styled.input`
   padding:5px;
   margin-left: 1px;
   border-top-left-radius:3px;
   border-bottom-left-radius:3px;
   width: 100%;
   border: .5px solid #535455;
   outline-style  :none ;
  `;

 export const RefreshBtn = styled.span`
 background: DodgerBlue;
 font-weight: lighter;
 color: #fff;
 padding: 4px 12px;
 cursor: pointer;
 border: none;
 border-top-right-radius:3px;
   border-bottom-right-radius:3px;
  margin-right : 5px ;
 `; 

export const  IconTitleContainer = styled.div`
display: flex;
font-size: 14px;
font-weight: 550;
flex-direction: column;
cursor: pointer;
justify-content: center;
align-items: center;
`;

export const IconTitle = styled.p`
text-align: center;

`;

export const IconWrapper = styled.div`
display: flex;
width: 100%;
margin: 0px 20px;
padding: 5px;
justify-content: space-between;
align-items: center;

`;
export const RunBtn = styled(RefreshBtn)`
margin-left: 10px;
border-radius:3px;
`;
export const AdbInput = styled(ClipboardInput)`
border-radius:3px;
`;

export const InputDropZone = styled.div`
display:flex;
width:100%;
padding:20px 5px;
align-items: center;
border:0px dashed black;
justify-content: center;
align-items: center;

`;

export const InputContainer = styled.div`
display:flex;
margin-left:10px;
flex-direction: column;
align-items: center;
`;
export const AppInput = styled.input`

padding: 5px 2px;

`;

export const UploadFileLink = styled.button`
color:DodgerBlue;
text-decoration: underline;
font-size:13px;
border:none;
outline:none;
background: #fff;
cursor:pointer;
padding:5px 2px;
&:hover{
  color:grey;
}


`;

export const DragDropText = styled.span`
font-size:13px;
padding: 1px;
`;
export const RemoteDataContainer = styled.div`
width :100%;
display: flex;
align-items: flex-start;
flex-direction: column;
justify-content: space-between;
 padding: 8px;
`;

export const StatusFile = styled.span`
width:100%;
font-size: 14px;
padding:6px 0px 18px 10px ;
overflow: hidden ;
height: 20px;
text-align:start;
margin : 8px 0px;
border: .5px solid grey;
background: lightgray;
border-radius:3px;
`;

export const FileActionLink = styled.a`
text-decoration:none;
font-size:12px;
color:DodgerBlue;
cursor: pointer;
display:flex;
padding:2px;
align-items: flex-start;
width:100%;
`;