import * as mongoose from 'mongoose';

const options: mongoose.SchemaOptions = {
	collection: "Teams"
}

export const teamSchema = new mongoose.Schema(
	{
		year: { type: Number },
		rank: { type: Number },
		team: { type: String },
		total: { type: Number },
		fiveStars: { type: Number },
		fourStars: { type: Number },
		threeStars: { type: Number },
		average: { type: Number },
		points: { type: Number }

	},
	options
);

type ITeam = mongoose.InferSchemaType<typeof teamSchema>;

interface TeamModel extends mongoose.Model<ITeam> { };

export const Team = mongoose.model<ITeam, TeamModel>(
	"Team",
	teamSchema
);