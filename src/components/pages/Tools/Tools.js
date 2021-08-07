import React from 'react'
import {useDropzone} from 'react-dropzone'
import {
    ToolsContainer,
    InputWrapper,
    CardTitle,
    CardBody,
    UrlInput,
    OpenBtn,
    ClipboardInput,
    RefreshBtn,
     IconWrapper,
      IconTitleContainer, 
      IconTitle,
      RunBtn,
      AdbInput,
      AppInput,
      FileActionLink,
      RemoteDataContainer,
      StatusFile,
      InputDropZone,
      InputContainer,
      DragDropText,
      UploadFileLink
} from './Tools.elements'
import { IoWifi } from 'react-icons/io5'
import { BiStore } from 'react-icons/bi'
import { IconContext } from 'react-icons/lib'
import { MdSettingsApplications, MdViewList } from 'react-icons/md'
import { Card } from '../../../globalcomponents/CommanElements'
import {DebugData}  from './Data'
function Tools() {
    const {acceptFile,getRootProps, getInputProps} = useDropzone()
    return (
        <IconContext.Provider value={{  size : '22px'}} >
        <ToolsContainer>
            <Card>
                <CardTitle>Browser</CardTitle>
                <CardBody>
                    <InputWrapper>
                        <UrlInput type="text" ></UrlInput>
                        <OpenBtn type="button" >Open</OpenBtn>
                    </InputWrapper>
                </CardBody>
            </Card>
            <Card>
                <CardTitle>Clipboard</CardTitle>
                <CardBody>
                    <InputWrapper>
                        <ClipboardInput type="text" >

                        </ClipboardInput>
                        <RefreshBtn>
                            <i className="fas fa-sync-alt" aria-hidden="true" style={{ color: '#fff' }}></i>
                        </RefreshBtn>
                    </InputWrapper>
                </CardBody>
            </Card>
            <Card>
                <CardTitle>Shortcuts</CardTitle>
                <CardBody>
                    <IconWrapper>

                        <IconTitleContainer>
                            <MdSettingsApplications />
                            <IconTitle>Settings</IconTitle>
                        </IconTitleContainer>
                        <IconTitleContainer>
                            <IoWifi />
                            <IconTitle>Wifi</IconTitle>
                        </IconTitleContainer>
                        <IconTitleContainer>
                            <MdViewList />
                            <IconTitle>Apps</IconTitle>
                        </IconTitleContainer>
                        <IconTitleContainer>
                            <BiStore />
                            <IconTitle>App Store</IconTitle>
                        </IconTitleContainer>
                    </IconWrapper>
                </CardBody>
            </Card>
            <Card>
                <CardTitle>Remote Debug</CardTitle>
                <CardBody>
                <RemoteDataContainer>
                    <StatusFile>{DebugData.status}</StatusFile>
                    <FileActionLink href="#" >{DebugData.link1}</FileActionLink>
                    <FileActionLink href="#">{DebugData.link2}</FileActionLink>
                    <FileActionLink href="#" >{DebugData.link3}</FileActionLink>
                
                </RemoteDataContainer>
                </CardBody>
            </Card>
            <Card>
                <CardTitle>Install App</CardTitle>
                <CardBody>
              <InputWrapper>
            
              <InputDropZone {...getRootProps({ refKey: 'innerRef' })} >
              <i style={{cursor:'pointer',color:'DodgerBlue'}} className="fas fa-file-upload" />
              <InputContainer>
              <AppInput {...getInputProps()}></AppInput>
              <UploadFileLink onClick="" >Choose an Apk file to upload</UploadFileLink>
              <DragDropText>or drag & drop here</DragDropText>
              </InputContainer>
             
              </InputDropZone>

              </InputWrapper>
                </CardBody>
            </Card>
            <Card>
                <CardTitle>Adb Shell</CardTitle>
                <CardBody>
                <InputWrapper>
                        <AdbInput type="text" >

                        </AdbInput>
                        <RunBtn>
                            Run
                        </RunBtn>
                    </InputWrapper>
                </CardBody>
            </Card>

        </ToolsContainer>
        </IconContext.Provider>
    )
}

export default Tools
