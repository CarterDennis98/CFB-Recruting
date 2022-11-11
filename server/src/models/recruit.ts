import * as mongoose from 'mongoose';

const options: mongoose.SchemaOptions = {
	collection: "Recruits"
}

export const recruitSchema = new mongoose.Schema(
	{
		name: { type: String },
		age: { type: Number },
		highSchool: { type: String },
		city: { type: String },
		state: { type: String }
	},
	options
);

type IRecruit = mongoose.InferSchemaType<typeof recruitSchema>;

interface RecruitModel extends mongoose.Model<IRecruit> { };

export const Recruit = mongoose.model<IRecruit, RecruitModel>(
	"Recruit",
	recruitSchema
);