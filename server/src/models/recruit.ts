import * as mongoose from 'mongoose';

const options: mongoose.SchemaOptions = {
	collection: "Recruits"
}

export const recruitSchema = new mongoose.Schema(
	{
		name: { type: String },
		school: { type: String },
		position: { type: String },
		heightWeight: { type: String },
		stars: { type: Number },
		rating: { type: Number },
		nationalRank: mongoose.Schema.Types.Mixed,
		stateRank: { type: Number },
		positionRank: { type: Number },
	},
	options
);

type IRecruit = mongoose.InferSchemaType<typeof recruitSchema>;

interface RecruitModel extends mongoose.Model<IRecruit> { };

export const Recruit = mongoose.model<IRecruit, RecruitModel>(
	"Recruit",
	recruitSchema
);