<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input
        v-model="listQuery.title"
        :placeholder="t('table.title')"
        style="width: 200px"
        class="filter-item"
        @keyup.enter="handleFilter"
        @input="handleFilterChange"
      />

      <el-button
        v-waves
        class="filter-item"
        type="primary"
        icon="el-icon-search"
        @click="handleFilter"
      >
        {{ t("table.search") }}
      </el-button>

      <el-button
        class="filter-item"
        style="margin-left: 10px"
        type="primary"
        icon="el-icon-edit"
        @click="handleCreate"
      >
        {{ t("table.add") }}
      </el-button>

      <el-button
        v-waves
        :loading="downloadLoading"
        class="filter-item"
        type="primary"
        icon="el-icon-download"
        @click="handleDownload"
      >
        {{ t("table.export") }}
      </el-button>
    </div>

    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column
        :label="t('table.id')"
        prop="id"
        sortable="custom"
        align="center"
        width="220"
        :class-name="getSortClass('id')"
      >
        <template #default="{ row }">
          <span>{{ row._id }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.preview_image')"
        width="180px"
        align="center"
      >
        <template #default="{ row }">
          <img
            :v-show="row.preview_image"
            height="120"
            :src="row.preview_image?.url"
            alt=""
          />
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.house_structure_picture')"
        width="180px"
        align="center"
      >
        <template #default="{ row }">
          <img
            :v-show="row.house_structure_picture"
            height="120"
            :src="row.house_structure_picture?.url"
            alt=""
          />
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.pic_type')"
        width="80px"
        align="center"
      >
        <template #default="{ row }">
          <span>{{ row.pic_type }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.name')"
        min-width="150px"
        align="center"
      >
        <template #default="{ row }">
          <span>{{ row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.desc')" width="180px" align="center">
        <template #default="{ row }">
          <span>{{ row.desc }}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="showReviewer"
        :label="t('table.reviewer')"
        width="110px"
        align="center"
      >
        <template #default="{ row }">
          <span style="color: red">{{ row.reviewer }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.station')" align="center" width="105px">
        <template #default="{ row }">
          <span>{{ row.station }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.price')" align="center" width="95">
        <template #default="{ row }">
          <span>{{ row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.floor_plan')" align="center" width="95">
        <template #default="{ row }">
          <span>{{ row.floor_plan }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.construction_area')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.construction_area }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.transportation')"
        align="center"
        width="150"
      >
        <template #default="{ row }">
          <span>{{ row.transportation }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.House_structure')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.House_structure }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.detail_desc')"
        align="center"
        width="150"
      >
        <template #default="{ row }">
          <span>{{ row.detail_desc }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.indoor_map_desc')"
        align="center"
        width="1150"
      >
        <template #default="{ row }">
          <div class="table-img-container">
            <div
              class="table-img-box"
              v-for="item in row.indoor_map_desc"
              :key="item"
            >
              <img
                class="table-img"
                :src="item.url"
                :alt="item.desc"
                srcset=""
              />
              <span class="table-desc">{{ item.desc }}</span>
            </div>
          </div>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.location')" align="center" width="150">
        <template #default="{ row }">
          <span>{{ row.location }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.regional_district_block')"
        align="center"
        width="150"
      >
        <template #default="{ row }">
          <span>{{ row.regional_district_block }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.private_road')"
        align="center"
        width="150"
      >
        <template #default="{ row }">
          <span>{{ row.private_road }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.setback')" align="center" width="95">
        <template #default="{ row }">
          <span>{{ row.setback }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.building_coverage_ratio')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.building_coverage_ratio }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.floor_area_ratio')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.floor_area_ratio }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.facility')" align="center" width="95">
        <template #default="{ row }">
          <span>{{ row.facility }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.other_equipment')"
        align="center"
        width="150"
      >
        <template #default="{ row }">
          <span>{{ row.other_equipment }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.current_situation')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.current_situation }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.mode_of_transaction')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.mode_of_transaction }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.delivery_conditions')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.delivery_conditions }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.delivery_time')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.delivery_time }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.time')" align="center" width="110">
        <template #default="{ row }">
          <span>{{ row.time }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.land_rights')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.land_rights }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.remarks')" align="center" width="150">
        <template #default="{ row }">
          <span>{{ row.remarks }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.other_expenses')"
        align="center"
        width="170"
      >
        <template #default="{ row }">
          <span>{{ row.other_expenses }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.city_planning_area_division')"
        align="center"
        width="110"
      >
        <template #default="{ row }">
          <span>{{ row.city_planning_area_division }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.landmark')" align="center" width="95">
        <template #default="{ row }">
          <span>{{ row.landmark }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.new_hourse')" align="center" width="95">
        <template #default="{ row }">
          <span>{{ row.new_hourse }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.land_readjustment')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.land_readjustment }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.ticity_planning_roadme')"
        align="center"
        width="95"
      >
        <template #default="{ row }">
          <span>{{ row.ticity_planning_roadme }}</span>
        </template>
      </el-table-column>
      <el-table-column :label="t('table.use_area')" align="center" width="110">
        <template #default="{ row }">
          <span>{{ row.use_area }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.terrain')"
        class-name="status-col"
        width="100"
      >
        <template #default="{ row }">
          <span>{{ row.terrain }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.main_approach')"
        align="center"
        width="230"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <span>{{ row.main_approach }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.legal_restrictions')"
        align="center"
        width="95"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <span>{{ row.legal_restrictions }}</span>
        </template>
      </el-table-column>
      <el-table-column
        :label="t('table.parking')"
        align="center"
        width="95"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <span>{{ row.parking }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="t('table.update')"
        align="center"
        width="130"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <span>{{ row.update }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="t('table.seller_talk')"
        align="center"
        width="230"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <span>{{ row.seller_talk }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="t('table.charge_talk')"
        align="center"
        width="230"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <span>{{ row.charge_talk }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="t('table.youtube_src')"
        align="center"
        width="230"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <span>{{ row.youtube_src }}</span>
        </template>
      </el-table-column>

      <el-table-column
        :label="t('table.tag')"
        align="center"
        width="330"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <el-tag
            v-for="item in row.tag"
            class="ml-2 table-tag"
            :key="item"
            type="success"
          >
            {{ item }}
          </el-tag>
        </template>
      </el-table-column>

      <!-- <el-table-column :label="t('table.status')" class-name="status-col" width="100">
        <template #default="{ row }">
          <el-tag :type="row.status">
            {{ row.status }}
          </el-tag>
        </template>
      </el-table-column> -->

      <el-table-column
        :label="t('table.actions')"
        align="center"
        width="220"
        class-name="fixed-width"
      >
        <template #default="{ row, $index }">
          <el-button type="primary" size="mini" @click="handleUpdate(row)">
            {{ t("table.edit") }}
          </el-button>
          <!-- <el-button v-if="row.status !== 'published'" size="mini" type="success"
            @click="handleModifyStatus(row, 'published')">
            {{ t("table.publish") }}
          </el-button> -->
          <!-- <el-button v-if="row.status !== 'draft'" size="mini" @click="handleModifyStatus(row, 'draft')">
            {{ t("table.draft") }}
          </el-button> -->
          <el-button
            v-if="row.status !== 'deleted'"
            size="mini"
            type="danger"
            @click="handleDelete(row, $index)"
          >
            {{ t("table.delete") }}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      :total="total"
      v-show="total > 0"
      v-model:page="listQuery.page"
      v-model:limit="listQuery.limit"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 15, 20]"
      page-size="5"
      layout="total, sizes, prev, pager, next, jumper"
    />
    <!-- 弹窗 -->

    <el-dialog :title="textMap[dialogStatus]" v-model="dialogFormVisible">
      <el-form
        ref="dataForm"
        :rules="rules"
        :model="tempHourseModel"
        label-position="left"
        label-width="auto"
        status-icon="true"
      >
        <el-form-item
          :label="t('table.pic_type') + '：'"
          prop="pic_type"
        >
          <el-select
            v-model="tempHourseModel.pic_type"
            class="filter-item"
            :placeholder="t('table.placeholder')"
          >
            <el-option
              v-for="item in calendarTypeOptions"
              :key="item.key"
              :label="item.displayName"
              :value="item.key"
            />
          </el-select>
        </el-form-item>

        <el-form-item
          v-for="item in EleItemArr"
          :key="item"
          :label="t(`table.${item.key}`) + '：'"
          :prop="item.key"
        >
          <el-input v-model="tempHourseModel[item.key]" />
        </el-form-item>

        <el-form-item :label="t('table.tag') + '：'" prop="tag">
          <el-input v-model="tempHourseModel.tag" />
          <el-link
            disabled="true"
            :underline="false"
            tag="span"
            type="warning"
            >{{ t("table.tag_tips") }}</el-link
          >
        </el-form-item>

        <div class="form-pic-desc-container">
          <el-form-item
            :label="t('table.preview_image') + '：'"
            prop="filelist"
          >
            <Upload
              :handlerUploadRemoveOne="handlerUploadRemoveOne"
              :handlerUploadOne="handlerUploadOne"
              :filelist="tempHourseModel.filelist"
              :multiple="false"
              type="privew"
              limit="1"
            />
          </el-form-item>
        </div>

        <div class="form-pic-desc-container">
          <el-form-item
            :label="t('table.house_structure_picture') + '：'"
            prop="house_structure_picture_filelist"
          >
            <Upload
              :handlerUploadRemoveOne="handlerUploadRemoveOne"
              :handlerUploadOne="handlerUploadOne"
              :filelist="tempHourseModel.house_structure_picture_filelist"
              :multiple="false"
              limit="1"
            />
          </el-form-item>
        </div>

        <div class="form-pic-desc-container">
          <h3>{{ t("table.indoor_map_desc") }}</h3>
          <el-form-item :label="t('table.pic') + '：'" prop="indoor_map_desc">
            <Upload
              :handlerUploadRemoveMany="handlerUploadRemoveMany"
              :handlerUploadMany="handlerUploadMany"
              :filelist="tempHourseModel.indoor_map_desc"
              :multiple="true"
              limit="40"
            />
          </el-form-item>

          <el-form-item
            :label="t('table.pic_desc') + '：'"
            prop="picDescFormData"
          >
            <el-input v-model="tempHourseModel.picDescFormData" />
            <el-link
              disabled="true"
              :underline="false"
              tag="span"
              type="warning"
              >{{ t("table.pic_desc_tips") }}</el-link
            >
          </el-form-item>
        </div>
      </el-form>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">
          {{ t("table.cancel") }}
        </el-button>
        <el-button
          type="primary"
          @click="dialogStatus === 'create' ? createData() : updateData()"
        >
          {{ t("table.confirm") }}
        </el-button>
      </div>
    </el-dialog>

    <!-- 
    <el-dialog v-model:visible="dialogPageviewsVisible" title="Reading statistics">
      <el-table :data="pageviewsData" border fit highlight-current-row style="width: 100%">
        <el-table-column prop="key" label="Channel" />
        <el-table-column prop="pageviews" label="Pageviews" />
      </el-table>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogPageviewsVisible = false">
          {{ t("table.confirm") }}</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  toRefs,
  ref,
  nextTick,
  onMounted,
  unref
} from "vue";
import { ElForm, ElMessage } from "element-plus";
import { cloneDeep, debounce } from "lodash";
import {
  getArticles,
  getPageviews,
  createArticle,
  updateArticle,
  defaultHourseModel,
  deleteArticle
} from "@/apis/articles";
import { HourseModel } from "@/model/hourseModel";

import { exportJson2Excel } from "@/utils/excel";
import { formatJson } from "@/utils";
import { useI18n } from "vue-i18n";
import { objectToArray } from "../../utils/formdata";
import Upload from "./dynamic-table/components/Upload.vue";
export default defineComponent({
  components: {
    Upload
  },
  setup() {
    const { t } = useI18n();
    const calendarTypeOptions = [
      { key: "1", displayName: "1" },
      { key: "2", displayName: "2" },
      { key: "3", displayName: "3" },
      { key: "4", displayName: "4" },
      { key: "5", displayName: "5" },
      { key: "6", displayName: "6" },
      { key: "7", displayName: "7" }
    ];
    const calendarTypeKeyValue = calendarTypeOptions.reduce(
      (acc: { [key: string]: string }, cur) => {
        acc[cur.key] = cur.displayName;
        return acc;
      },
      {}
    ) as { [key: string]: string };
    const dataForm = ref(ElForm);
    const dataMap = reactive({
      tableKey: 0,
      list: Array<HourseModel>(),
      total: 0,
      listLoading: true,
      listQuery: {
        page: 1,
        limit: 5,
        title: "",
        sort: "+id"
      },
      currentPage: 1,
      EleItemArr: objectToArray(defaultHourseModel),
      calendarTypeOptions: calendarTypeOptions,
      sortOptions: [
        { label: "ID Ascending", key: "+id" },
        { label: "ID Descending", key: "-id" }
      ],

      statusOptions: ["published", "draft", "deleted"],
      showReviewer: false,
      dialogFormVisible: false,
      dialogStatus: "",
      textMap: {
        update: t("table.edit"),
        create: t("table.create")
      },
      dialogPageviewsVisible: false,
      pageviewsData: [],
      rules: {
        pic_type: [
          {
            required: true,
            message:
              t("table.pic_type") + t("table.is") + t("table.required"),
            trigger: "change"
          }
        ],
        filelist: [
          {
            required: true,
            message: t("table.filelist") + t("table.is") + t("table.required"),
            trigger: "change"
          }
        ],
        indoor_map_desc: [
          {
            required: true,
            message:
              t("table.indoor_map_desc") + t("table.is") + t("table.required"),
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: t("table.desc") + t("table.is") + t("table.required"),
            trigger: "blur"
          }
        ],
        name: [
          {
            required: true,
            message: t("table.name") + t("table.is") + t("table.required"),
            trigger: "blur"
          }
        ],
        picDescFormData: [
          {
            required: true,
            message: t("table.pic_desc") + t("table.is") + t("table.required"),
            trigger: "blur"
          }
        ],
        station: [
          {
            required: true,
            message: t("table.station") + t("table.is") + t("table.required"),
            trigger: "blur"
          }
        ],
        price: [
          {
            required: true,
            message: t("table.price") + t("table.is") + t("table.required"),
            trigger: "blur"
          }
        ],
        construction_area: [
          {
            required: true,
            message:
              t("table.construction_area") +
              t("table.is") +
              t("table.required"),
            trigger: "blur"
          }
        ],
        location: [
          {
            required: true,
            message: t("table.location") + t("table.is") + t("table.required"),
            trigger: "blur"
          }
        ]
      },
      downloadLoading: false,
      tempHourseModel: { ...defaultHourseModel, picDescFormData: "" },

      handleCurrentChange(page?: any) {
        dataMap.getList(page);
      },

      handlerUploadOne(
        file: {
          filename: string;
          url: string;
        },
        type: "privew | house_structure_picture"
      ) {
        const _Arr = cloneDeep(dataMap.tempHourseModel.filelist).splice(1);

        _Arr.push({ filename: file.filename, url: file.url });
        // @ts-ignore
        if (type === "privew") {
          dataMap.tempHourseModel.filelist = _Arr;
        } else {
          // @ts-ignore
          dataMap.tempHourseModel.house_structure_picture = _Arr;
        }
        console.log({ ss: dataMap.tempHourseModel.filelist });
      },
      handlerUploadMany(file: { filename: ""; url: "" }) {
        // @ts-ignore
        dataMap.tempHourseModel.indoor_map_desc.push(file);
      },

      handlerUploadRemoveOne(type: string) {
        if (type === "privew") {
          dataMap.tempHourseModel.filelist = [];
          // console.log({
          //   ss: dataMap.tempHourseModel.house_structure_picture_filelist,
          //   oo: dataMap.tempHourseModel.filelist
          // });
        } else {
          dataMap.tempHourseModel.house_structure_picture_filelist = [];
        }
      },
      handlerUploadRemoveMany(filelists: any) {
        dataMap.tempHourseModel.indoor_map_desc = filelists;
      },

      handleSizeChange(val: any) {
        console.log({ val });

        dataMap.getList(null, null, val);
      },

      async getList(page?: any, total?: any, limit?: any) {
        if (page) {
          dataMap.listQuery.page = page;
        }
        if (limit) {
          dataMap.listQuery.limit = limit;
        }
        dataMap.listLoading = true;
        const data = await getArticles(dataMap.listQuery);
        dataMap.list = data?.data.data ?? [];
        dataMap.total = data?.data.total || 0;
        setTimeout(() => {
          dataMap.listLoading = false;
        }, 0.5 * 1000);
      },
      handleFilter() {
        dataMap.getList();
      },

      // handleModifyStatus(row: any, status: string) {
      //   ElMessage.success({
      //     message: '操作成功',
      //     type: 'success'
      //   })
      //   row.status = status
      // },

      sortChange(data: any) {
        const { prop, order } = data;
        if (prop === "id") {
          dataMap.sortByID(order);
        }
      },

      sortByID(order: string) {
        if (order === "ascending") {
          dataMap.listQuery.sort = "+id";
        } else {
          dataMap.listQuery.sort = "-id";
        }
        dataMap.handleFilter();
      },

      getSortClass(key: string) {
        const sort = dataMap.listQuery.sort;
        return sort === `+${key}` ? "ascending" : "descending";
      },

      resetTempHourseModel() {
        dataMap.tempHourseModel = {
          ...cloneDeep(defaultHourseModel),
          filelist: [],
          indoor_map_desc: [],
          house_structure_picture_filelist: []
        };

        console.log({ yyy: dataMap.tempHourseModel });
      },

      resetEleItemArr() {
        const excludesArr = [
          "id",
          "filelist",
          "preview_image",
          "label",
          "indoor_map_desc",
          "pic_type",
          "pic_desc",
          "tag_str",
          "tag",
          "house_structure_picture",
          "house_structure_picture_filelist",
          "",
          "",
          "",
          ""
        ];
        dataMap.EleItemArr = cloneDeep(
          objectToArray(defaultHourseModel)
        ).filter(i => !excludesArr.includes(i.key));
      },

      handleCreate() {
        dataMap.dialogStatus = "create";
        dataMap.dialogFormVisible = true;
        dataMap.resetTempHourseModel();
        dataMap.resetEleItemArr();
        nextTick(() => {
          (dataForm.value as typeof ElForm).clearValidate();
        });
      },

      createData() {
        const form = unref(dataForm);
        form.validate(async (valid: any) => {
          if (valid) {
            const HourseModel = dataMap.tempHourseModel;
            HourseModel.preview_image = HourseModel.filelist[0];
            HourseModel.house_structure_picture =
              HourseModel.house_structure_picture_filelist[0];
            HourseModel.pic_desc = HourseModel.picDescFormData;
            // @ts-ignores
            if (HourseModel.tag.length > 0)
              HourseModel.tag = HourseModel?.tag?.split(",");
            console.log({ HourseModel });
            // HourseModel.id = Math.round(Math.random() * 100) + 1024 // mock a id
            try {
              const addData = await createArticle(HourseModel);
              if (addData) {
                dataMap.dialogFormVisible = false;
                ElMessage.success({
                  message: t("system.success"),
                  type: "success",
                  duration: 2000
                });
                dataMap.getList(null, null, null);
              }
            } catch (error) {
              throw new Error(error);
            }
          }
        });
      },

      handleUpdate(row: any) {
        dataMap.dialogStatus = "update";
        dataMap.dialogFormVisible = true;
        const excludesArr = [
          "id",
          "filelist",
          "preview_image",
          "label",
          "indoor_map_desc",
          "pic_type",
          "pic_desc",
          "tag_str",
          "tag",
          "house_structure_picture",
          "house_structure_picture_filelist",
          "",
          "",
          "",
          ""
        ];
        dataMap.EleItemArr = cloneDeep(
          objectToArray(defaultHourseModel)
        ).filter(i => !excludesArr.includes(i.key));
        const _obj = cloneDeep({
          ...row,
          filelist: row.preview_image ? [row.preview_image] : [],
          house_structure_picture_filelist: row.house_structure_picture
            ? [row.house_structure_picture]
            : [],
          picDescFormData: dataMap.picDescFormData(row.indoor_map_desc)
        });
        console.log({ _obj });

        dataMap.tempHourseModel = _obj;
        nextTick(() => {
          (dataForm.value as typeof ElForm).clearValidate();
        });
      },

      updateData() {
        const form = unref(dataForm);
        form.validate(async (valid: any) => {
          if (valid) {
            const tempData = cloneDeep(dataMap.tempHourseModel);
            console.log({99:tempData.filelist,88:tempData.house_structure_picture});
            
            // @ts-ignore
            tempData.preview_image = tempData.filelist[0];
            tempData.house_structure_picture =
              tempData.house_structure_picture[0];
            tempData.pic_desc = tempData.picDescFormData;
            console.log(tempData);
            // @ts-ignore
            if (!(tempData.tag instanceof Array) && tempData.tag.length > 0)
              tempData.tag = tempData.tag.split(",");
            tempData.tag = tempData.tag.filter((item: string) => item !== "");
            try {
              const data = await updateArticle(tempData);
              if (data) {
                dataMap.dialogFormVisible = false;
                ElMessage.success({
                  message: t("system.success"),
                  type: "success",
                  duration: 2000
                });
                dataMap.getList(null, null, null);
              }
            } catch (error) {
              throw new Error(error);
            }
          }
        });
      },

      async handleDelete(row: any, index: number) {
        console.log({ row });
        try {
          const data = await deleteArticle({ _id: row._id });
          if (data?.msg === "success") {
            ElMessage.success({
              message: t("system.delete_successfully"),
              type: "success",
              duration: 2000
            });
          }
          dataMap.getList(null, null, null);
        } catch (error) {
          throw new Error(error);
        }
      },

      async handleGetPageviews(pageviews: string) {
        const data = await getPageviews({ pageviews });
        dataMap.pageviewsData = data?.data.pageviews;
        dataMap.dialogPageviewsVisible = true;
      },

      handleDownload() {
        dataMap.downloadLoading = true;
        const tHeader = ["timestamp", "title", "type", "importance", "status"];
        const filterVal = [
          "timestamp",
          "title",
          "type",
          "importance",
          "status"
        ];
        const data = formatJson(filterVal, dataMap.list);
        exportJson2Excel(tHeader, data, "table-list");
        dataMap.downloadLoading = false;
      },

      picDescFormData(
        originalArray: [{ url: string; desc: string; filename?: string }]
      ): string {
        // 创建一个新数组来存储提取的值
        const newArray = [];
        // 使用循环或数组方法提取特定值
        for (var i = 0; i < originalArray.length; i++) {
          newArray.push(originalArray[i].desc);
        }
        return newArray.join("&");
      }
    });
    const handleFilterChange = debounce(() => dataMap.getList(), 400);

    onMounted(() => {
      console.log(typeof ElForm);
      dataMap.getList(null, null, 5);
    });

    return { t, ...toRefs(dataMap), handleFilterChange, dataForm };
  }
});
</script>
<style scoped>
.table-img-container {
  display: flex;
  flex-wrap: wrap;
}

.table-img-box {
  width: calc(15%);
  display: flex;
  flex-direction: column;
}

.table-img-box .table-desc {
  display: block;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table-img-box .table-img {
  height: 100px;
  /* width: 100px; */
  margin-right: 15px;
}

.form-pic-desc-container {
  padding: 10px;
  border: 1px solid skyblue;
  margin-bottom: 20px;
}

.form-pic-desc-container h3 {
  text-align: center;
}

.table-tag {
  margin: 3px;
}
</style>
