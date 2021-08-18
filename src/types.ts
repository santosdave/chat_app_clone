export interface User{
    username:string;
    firstName?:string;
    lastName?:string;
    email?:string;
}
export interface MessagePopulated{
    content:string;
    status?:string;
    isSystem?:boolean;
    user:User;
    groupCode:string;
    createdAt:string;
}
export interface GroupUserPopulated{
    user:User;
    unread:number;
}
export interface GroupPopulated{
    code:string;
    description:string;
    lastActivity?:Date;
    lastMessagePreview?:string;
    users: Array<GroupUserPopulated>;
    createdAt:string;
}
export interface UserGroup{
    name:string;
    group:string;
}
export interface ChatMessage{
    userGroup:UserGroup;
    content:string;
    status?:string;
    isSystem?:boolean;
}
export interface CredAvailabilityData{
    value:string;
    type:string;
}
export interface LoginData{
    username:string;
    password:string;
}
export interface RegisterData extends LoginData{
    firstName:string;
    lastName?:string;
    email:string;
}
export interface LoginStatusData {
	newValue: boolean;
}
export interface NewGroupData {
	description: string;
}
export interface GroupData {
	groupCode: string;
}

export interface BaseResponse {
	success: boolean;
}
export interface CredAvailabilityResp extends BaseResponse {
	isAvailable: boolean;
}
export interface LoginResp extends BaseResponse {
	authorization: string;
	data: {
		userDetails: User;
	};
}
export interface UserResp extends BaseResponse {
	user: User;
}
export interface GroupResp extends BaseResponse {
	data: {
		group: GroupPopulated;
	};
}
export interface GroupsResp extends BaseResponse {
	data: {
		groups: GroupPopulated[];
	};
}
export interface GroupEventResp {
	userDetails: User;
}
export interface JoinEventResp extends GroupEventResp {
	joinedGroup: string;
}
export interface LeaveEventResp extends GroupEventResp {
	leftGroup: string;
}
export interface MessageEventResp {
	newMsg: MessagePopulated;
	updatedGroup: GroupPopulated;
}
export interface MessagesResp extends BaseResponse {
	data: {
		messages: MessagePopulated[];
	};
}