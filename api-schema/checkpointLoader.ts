import { array } from 'prop-types'
import * as v from 'valibot';
export const CheckpointLoaderSchema = v.object({
    CheckpointLoader: v.object({
        input: v.object({
            required: v.object({
                config_name: v.array(v.array(v.string())),
                ckpt_name: v.array(v.array(v.string()))
            })
        }),
        output: v.array(v.string()),
        output_is_list: v.array(v.unknown()),
        output_name: v.array(v.unknown()),
        name: v.string(),
        display_name: v.string(),
        description: v.string(),
        category: v.string(),
        output_node: v.boolean()
    })
})


export type CheckpointLoaderData = v.Output<typeof CheckpointLoaderSchema>